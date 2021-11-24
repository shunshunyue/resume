import axios from "axios";
import React from "react";
import moment from 'moment'
class AxiosGet extends React.Component{
    state={
        data:[],
        newdata:{
            name:'',
            msg:'',
            time:''
        }
        
    }
componentDidMount(){
    this.huoqu()
}
   huoqu=()=>{
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
    
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    Aport=(e)=>{
        const name = this.refs.name.value 
        const msg = this.refs.msg.value
        const time=moment().format('YYYY-MM-DD HH:mm:ss');
        const  newTestData=Object.assign({},this.state.newdata,{time:time,name:name,msg:msg});   
            this.setState({
                newdata:newTestData
            })
        
            if(this.state.newdata.name!==''&&this.state.newdata.msg!==''){
                const url= 'http://yapi.smart-xwork.cn/mock/84769/flora-test/add'
                 axios.post(url, this.newdata)
                    .then( (response)=> {
                        const newda=[...this.state.data]
                        newda.push(this.state.newdata)
                        this.setState({
                                 data:newda
                             })
                        return
          })
          .catch( (error)=> {
            console.log(error);
          });
        }else{
            return
        }
        return
    }
    Render=()=>{
        return(
            this.state.data.map((text,i)=>{
                return (<ul key={i}>
                    <li className='name'>姓名：{text.name}</li>
                    <li className='say'> 说：{text.msg}</li>
                    <li className='time'>{text.time}</li>
                </ul>)
                 })
        )
    }
    render(){
        return(
            <div>
                  姓名：  <input ref='name' placeholder='请输入你的名称' type='text' ></input>
                   想说的话： <textarea  ref='msg' placeholder='请输入你想说的话' ></textarea>
                    <button onClick={this.Aport}>发布</button>
                     <div>{this.Render()}</div>   
            </div>
        )
    }

}


export {AxiosGet}