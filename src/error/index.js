import React from 'react';

export class ErrorComponent extends React.Component {
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

            if (this.state.hasError) {
                return (
            
                     <div className="text-wrapper" >
                     <div className="title" data-content="404">
                         Error
                     </div>
         
                     <div className="subtitle">
                        
                         {this.state.message}
                     </div>
         
                     <div className="buttons">

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