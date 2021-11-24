import React from 'react';
import {AxiosGet} from '../axios/get.js'
import './left.css';
import back from './log.jpeg'
class Left extends React.Component{
  render(){
    return(
        <div className='LeftSidebar'>
          {/* <div className='Commentarea'>
                <AxiosGet />
          </div> */}
          <div className='head'>
            <div id='headPortrait'><img alt='头像' src={back}></img></div>
            <div className='HeaderText'>
              <h4>软 件 工 程</h4>
              <h4>SOFTWARE</h4>
              <h4>ENGINEERING</h4>
            </div>
          </div>
         <div className='LowerLeft'>
            <div className='TopBox'>
              <div className='TopLeft'>
                <h5>P R O F I L E </h5>
                <h4>李 琦</h4>
              </div>
              <div className='ButRight'>
                <h5>男</h5>
                <h5>上海</h5>
                <h6>1993.10.21</h6>
              </div>
            </div>
            <div className='butbox' >
              <h4 className='titleText'>教 育 经 历</h4>
              <h6 className='titleText'>EDUCATION BACKGROUND</h6>
              <div className='butbox_content'>
                <ul>
                  <li>
                    <h4>上海觅知大学</h4>
                    <h6>软件工程 | 本科 &nbsp;<span className='special'>2012.09 - 2016.07</span></h6>
                  </li>
                  <li>
                    <h4>主修课程:</h4>
                    <h6>C/C++程序设计、Java程序设计、数据结构、计算机方法、编译原理、软件工程、操作系统原理、数据库系统原理、网络数据库等</h6>
                      <span>GPA: 3.8/4.0 在校四年均保持排名位于专业前10%</span>
                    
                  </li>
                </ul>
              </div>
              <h4 className='titleText'>工 作 经 历</h4>
              <h6 className='titleText'>WORK EXPERIENCE</h6>
              <div className='butbox_content'>
                <ul>
                  <li>
                    <h4>觅知办公有限公司</h4>
                    <h5 >Java 工程师 &nbsp; <span className='special'>2016.09 - 2019.07</span></h5>
                  </li>
                  <li>
                    <h6>根据产品需求，完成项目的任务分析设计，完成详细设计和编码，确保项目的进度和质量</h6>
                  </li>
                  <li>
                    <h6>负责后端API设计和开发维护，从构思到执行，编写架构性能好的后端代码</h6>
                  </li>
                  <li>
                    <h6>协助其他人员的测试，完成测试阶段的BUG修改</h6>
                  </li>
                </ul>
              </div>
            </div>
         </div>
        </div>
    )
  }
}
export default Left; 