import React from 'react';
import {AxiosGet} from '../axios/get.js'
import Animation  from '../animation.js'
import IconFont from './icon.js'
import './right.css';
const hobbyData = [{'name':'摄影', 'icon':'icon-sheying'},
                   {'name':'绘画', 'icon':'icon-formatpainter-fill'},
                   {'name':'旅行', 'icon':'icon-feiji'},
                   {'name':'音乐', 'icon':'icon-yinle'}]
 const personalInformation  = [{'information':'2563526499@qq.com', 'icon':'icon-youxiang'},
                                {'information':'17758246803', 'icon':'icon-dianhua'},
                                {'information':'yueshun', 'icon':'icon-weixin'},
                                {'information':'Yueshun', 'icon':'icon-weibo'},
                                {'information':'@yueyue', 'icon':'icon-shejiao-mianxing'}]                
class Right extends React.Component{
    
    render(){
        return(
           <div className='rightSidebar'>
                <div className='Commentarea'>
                    <AxiosGet />
                 </div>
               <div className='rightBox'>
                   <div className='rightHead'>
                     <h3>联 系 方 式 / 社 交 媒 体</h3>
                    <div className='headContent'>
                             {personalInformation.map((text,i)=>{
                                    return ( <ul>
                                                <li></li>
                                                <li><IconFont type={text.icon}/></li>
                                                <li>{text.information}</li>
                                             </ul>
                                            )
                          })}
                    </div>
                 </div>
               </div>
               
               <div className='rightBut'>
                    <h3>A B O U T &nbsp;M E</h3>
                    <h5>软件工程专业背景,有丰富的软件开发经历,扎实的技术基础;工作细致认真,积极主动,有耐心,严谨;有较强的的逻辑思维能力,善于分析、归纳、解决问题;有较强的的沟通技巧及团队合作精神,组织协调能力,较强的责任感及进取精神;对技术有浓厚兴趣，喜欢并不断的学习新技术。</h5>
                    <h3 className='rightSpecial'>专 业 技 能 &nbsp;<span>S K I L L S</span></h3>
                    <Animation name='Java / JavaScript' />
                    <Animation name='Spring' />
                    <Animation name='My Batis' />
                    <h6>熟悉数据库原理和常用性能优化技术以及NoSQL，Queue的原理、使用场景及限制</h6>
                    <h3 className='rightSpecial'>语 言 技 能 &nbsp;<span>L A N G U A G E </span></h3>
                    <Animation name='英语' />
                    <Animation name='西班牙语' />
                    <h6>全国计算机二级</h6>
                    <h3 className='rightSpecial'>奖 项 荣 誉 &nbsp;<span>A W A R D S </span></h3>
                    <h6 className='Specialcolor'>IOI 2019 &nbsp;&nbsp; <span>Gold</span></h6>
                    <h6 className='Specialcolor'>AP Computer Science A &nbsp;&nbsp; <span>5</span></h6>
                    <h3 className='rightSpecial'>兴 趣 爱 好 &nbsp;<span>H O B B I E S </span></h3>
                    <div className='interest'>
                        <ul>
                        {hobbyData.map((text,i)=>{
                         return ( 
                                     <li>
                                         <IconFont  type={text.icon}/>
                                         <div className='words'>{text.name}</div>
                                     </li>
                                )
                          })}
                        </ul>
                    </div>
               </div>
           </div> 
        )
    }
}
export default Right; 