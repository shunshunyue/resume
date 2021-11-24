import React from 'react';
import {AxiosGet} from '../axios/get.js'
import IconFont from './icon.js'
import './right.css';
class Right extends React.Component{
    render(){
        return(
           <div className='RightSidebar'>
                <div className='Commentarea'>
                    <AxiosGet />
                 </div>
               <div className='Right_box'>
                   <div className='Right_head'>
                     <h3>联 系 方 式 / 社 交 媒 体</h3>
                    <div className='head_content'>
                        <ul>
                            <li></li>
                            <li><IconFont type="icon-youxiang"/></li>
                            <li>2563526499@qq.com</li>
                            <li></li>
                            <li><IconFont type="icon-dianhua"/></li>
                            <li>17758246803</li>
                            <li></li>
                            <li><IconFont type="icon-weixin"/></li>
                            <li>yueshun</li>
                            <li></li>
                            <li><IconFont type="icon-weibo"/></li>
                            <li>Yueshun</li>
                            <li></li>
                            <li><IconFont type="icon-shejiao-mianxing"/></li>
                            <li>@yueyue</li>
                        </ul>
                    </div>
                    
                     </div>
               </div>
               
               <div className='Right_but'>
                    <h3>A B O U T &nbsp;M E</h3>
                    <h5>软件工程专业背景,有丰富的软件开发经历,扎实的技术基础;工作细致认真,积极主动,有耐心,严谨;有较强的的逻辑思维能力,善于分析、归纳、解决问题;有较强的的沟通技巧及团队合作精神,组织协调能力,较强的责任感及进取精神;对技术有浓厚兴趣，喜欢并不断的学习新技术。</h5>
                    <h3 className='Right_special'>专 业 技 能 &nbsp;<span>S K I L L S</span></h3>
                    <div className='Right_progressbar1'>
                        <span>Java / JavaScript</span>
                        <div className='Right_progressbar2'> </div>
                    </div>
                    <div className='Right_progressbar1'>
                        <span>Spring</span>
                        <div className='Right_progressbar2'> </div>
                    </div>
                    <div className='Right_progressbar1'>
                        <span>My Batis</span>
                        <div className='Right_progressbar2'> </div>
                    </div>
                    <h6>熟悉数据库原理和常用性能优化技术以及NoSQL，Queue的原理、使用场景及限制</h6>
                    <h3 className='Right_special'>语 言 技 能 &nbsp;<span>L A N G U A G E </span></h3>
                    <div className='Right_progressbar1'>
                        <span>英语</span>
                        <div className='Right_progressbar2'> </div>
                    </div>
                    <div className='Right_progressbar1'>
                        <span>西班牙语</span>
                        <div className='Right_progressbar2'> </div>
                    </div>
                    <h6>全国计算机二级</h6>
                    <h3 className='Right_special'>奖 项 荣 誉 &nbsp;<span>A W A R D S </span></h3>
                    <h6 className='Specialcolor'>IOI 2019 &nbsp;&nbsp; <span>Gold</span></h6>
                    <h6 className='Specialcolor'>AP Computer Science A &nbsp;&nbsp; <span>5</span></h6>
                    <h3 className='Right_special'>兴 趣 爱 好 &nbsp;<span>H O B B I E S </span></h3>
                    <div className='interest'>
                        <ul>
                            <li>
                                <IconFont  type="icon-sheying"/>
                                <div className='words'>摄影</div>
                            </li>
                            <li>
                                <IconFont  type="icon-formatpainter-fill"/>
                                <div className='words'>绘画</div>
                            </li>
                            <li>
                                <IconFont type="icon-feiji"/>
                                <div className='words'>旅行</div>
                            </li>
                            <li>
                                <IconFont type="icon-yinle"/>
                                <div className='words'>音乐</div>
                            </li>
                        </ul>
                    </div>
               </div>
           </div> 
        )
    }
}
export default Right; 