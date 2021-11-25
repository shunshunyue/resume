import axios from "axios";
import React from "react";
import moment from 'moment'
class AxiosGet extends React.Component{
    state={
        data:[],
        newData:{
            name:'',
            msg:'',
            time:''
        }
        
    }
componentDidMount(){
    this.getData()
}
getData=()=>{
        const url= 'http://yapi.smart-xwork.cn/mock/84769/flora-test/list'
        axios.get(url)
             .then(response=>{
                 this.setState({
                     data: response.data
                 })
                // console.log(this.state.data)
      })
            .catch(error =>{
            console.log(error.message)
      })
    }
    
    InputProcessing=(e)=>{
        const name = this.refs.name.value 
        const msg = this.refs.msg.value
        const time=moment().format('YYYY-MM-DD HH:mm:ss');
        const  newTestData=Object.assign({},this.state.newData,{time:time,name:name,msg:msg});   
            this.setState({
                newData:newTestData
            })
        
            if(this.state.newData.name!=='' && this.state.newData.msg!==''){
                const url= 'http://yapi.smart-xwork.cn/mock/84769/flora-test/add'
                 axios.post(url, this.newData)
                    .then( (response)=> {
                        const OldData=[...this.state.data]
                        OldData.push(this.state.newData)
                        this.setState({
                                 data:OldData
                             })

          })
                        .catch( (error)=> {
                            alert(error);
                        });
            }
    }
    render(){
        return(
            <div>
                  姓名：  <input ref='name' placeholder='请输入你的名称' type='text' ></input>
                   想说的话： <textarea  ref='msg' placeholder='请输入你想说的话' ></textarea>
                    <button onClick={this.InputProcessing}>发布</button>
                     {this.state.data.map((text,i)=>{
                         return (<ul key={i}>
                                     <li className='name'>姓名：{text.name}</li>
                                     <li className='say'> 说：{text.msg}</li>
                                     <li className='time'>{text.time}</li>
                                 </ul>)
                     })}
            </div>
        )
    }

}


export {AxiosGet}