import React, {useState} from 'react';
import '../assets/css/components/404.scss';

export class ErrorComponent extends React.Component {
    state = {
        hasError: false,
        message: '',
    }

    componentDidCatch(error) {
        console.log(error)
        this.setState({
            hasError: true,
            message: error.message,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='error'>
                    {this.state.message}
                </div>
            );
        }

        return this.props.children;
    }
}

export const withError = (Component) => {
    class ErrorComponent extends React.Component {
        state = {
            hasError: false,
            message: '',
        }

        componentDidCatch(error) {
            this.setState({
                hasError: true,
                message: error.message,
            });
        }

        retry = () => {
            this.setState({
                hasError: false,
                message: '',
            });
        }

        render() {
            console.log(this.state);

            if (this.state.hasError) {
                return (
                    // <div className='error'>
                    //     {this.state.message}
                       
                    // </div>
                     <div className="text-wrapper" >
                     {/* <img src={img404} alt="NotFund" className="imgmarvel" /> */}
                     <div className="title" data-content="404">
                         Error
                     </div>
         
                     <div className="subtitle">
                        
                         {this.state.message}
                     </div>
         
                     <div className="buttons">
         
                         {/* <Link
         
                             className="button" to="/">Volver</Link> */}
                     </div>
                 </div >
                );
            }

            return <Component {...this.props} />;
        }
    }

    ErrorComponent.displayName = `withError(${Component.displayName || Component.name})`;

    return ErrorComponent;
};