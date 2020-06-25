import React from 'react';
import Aux from './Aux';
import Modal from '../components/Modal';

const errorHandler = (WrappedComponent,axios) => {
    return class extends React.Component {

        state = {
            error : null
        }        

        componentDidMount() {

            this.req =  axios.interceptors.request.use(req => {
                this.setState({error : null});
                return req;
            })

            this.res = axios.interceptors.response.use(res => res,error => {
                this.setState({error : error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.req);
            axios.interceptors.response.eject(this.res);
        }

        errorConfirmed = () => {
            this.setState({error : null});
        }

        render() {
            return(
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmed} >
                        { this.state.error ?  this.state.error.message : null} 
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default errorHandler