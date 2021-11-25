import React from "react";
class Animation extends React.Component{
    render(){
        return(
            <div className='Right_progressbar1'>
              <span>{this.props.name}</span>
              <div className='Right_progressbar2'> </div>
            </div>
        )
    }
}
export default Animation; 