import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';
import './Dashboard.css'
import React, { useState } from 'react';
import LineChart from './LineChart';
import UsaMap from './UsaMap';
import { AppDropdown, MonthlyDropd , MonthlyDropdTwo , MonthlyDropdThree, MonthlyDropdFour } from './AppDropdown';

const Dashboad = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenA, setIsOpenA] = useState(false);

  const toggleAccordionA = () => {
    setIsOpenA(!isOpenA);
  };

  const [isOpenB, setIsOpenB] = useState(false);

  const toggleAccordionB = () => {
    setIsOpenB(!isOpenB);
  };

  const [isOpenC, setIsOpenC] = useState(false);

  const toggleAccordionC = () => {
    setIsOpenC(!isOpenC);
  };
// App : DropdownMenu
  const [openApp,setOpenApp] = useState(false);
// App : DropdownMenu
// Visit : DropdownMenu
const [openMonthly,setOpenMonthly] = useState(false);
// Visit : DropdownMenu
// Top Advertisers : DropdownMenu
const [openMonthlyTwo,setopenMonthlyTwo] = useState(false);
// Top Advertisers : DropdownMenu
// Orders : DropdownMenu
const [openMonthlyThree,setopenMonthlyThree] = useState(false);
// Orders : DropdownMenu
// Daily Sale : DropdownMenu
const [openMonthlyFour,setopenMonthlyFour] = useState(false);
// Daily Sale : DropdownMenu



  return (
    <div className="DashboardContainer">
      <div className="main-nav">
        <ul>

          <li>
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </li>

          <li>
            <div className="NavItem" onClick={()=>{setOpenApp(!openApp)}}>
              <i class="fas fa-th" aria-hidden="true"></i>
              <span>App</span>
            </div>
            <div>
              <i class="fas fa-caret-down" id="Left"></i>
            </div>
                <div className={`AppDd ${openApp? 'active' : 'inactive'}`}>
                  <AppDropdown />
                </div>
          </li>

          <li>
            <div className="NavItem">
              <i className="fas fa-envelope"></i>
              <span>Mailbox</span>
            </div>
            <div>
              <i class="fas fa-caret-down" style={{ marginLeft: "-7px" }}></i>
            </div>
          </li>

          <li>
            <div className="NavItem">
              <i className="fas fa-bars"></i>
              <span>Forms & Widgets</span>
            </div>
            <div>
              <i class="fas fa-caret-down" style={{ marginLeft: "-8px" }}></i>
            </div>
          </li>

          <li>
            <div className="NavItem">
              <i className="fas fa-table"></i>
              <span>Charts & Tables</span>
            </div>
            <div>
              <i class="fas fa-caret-down" style={{ marginLeft: "-6px" }}></i>
            </div>
          </li>

          <li>
            <div className="NavItem">
              <i className="fas fa-laptop"></i>
              <span>UI Elements</span>
            </div>
            <div>
              <i class="fas fa-caret-down" style={{ marginLeft: "-5px" }}></i>
            </div>
          </li>

          <li>
            <div className="NavItem">
              <span>Extra Pages</span>
            </div>
            <div>
              <i class="fas fa-caret-down"></i>
            </div>
          </li>

        </ul>
      </div>
      <div className="ControlPanel">
        <div className="Panel SHAPE">
          <div>
            <h2>Dashboard <small>control panel</small></h2>
          </div>
          <div className="InnerPanel">
            <i class="fas fa-tachometer-alt"></i>
            <span>Home</span>
            <i class="fas fa-chevron-right"></i>
            <span>Dashboard</span>
          </div>
        </div>

        <div className="Panel">
          <div className="BoxContainer">
            <div className="BoxOne">
              <div className="Box"  id='Box'>
                <div className="Title">
                  <div className="Menu" onClick={()=>{setOpenMonthly(!openMonthly)}}>
                    <span>Visits</span>
                    <span>Monthly
                      <i class="fas fa-caret-down"></i>
                  <p className={`MonthlyDd ${openMonthly? 'active' : 'inactive'}`}>
                    <MonthlyDropd />
                  </p>
                    </span>
                  </div>

                  <div className="GraphHead">
                    <h2>2 125 854</h2>
                    <small>+5%
                      <i class="fas fa-arrow-up"></i>
                    </small>
                  </div>
                  <div style={{width:"350px",marginTop:"-60px",marginLeft:"-30px"}}>
                  <ChartTwo/>
                  </div>
                </div>
              </div>
              <div className="Box"  id='Box'>
                <div className="Title">
                  <div className="Menu" onClick={()=>{setopenMonthlyTwo(!openMonthlyTwo)}}>

                    <span>Top Advertisers</span>
                    <span>Weekly
                      <i class="fas fa-caret-down"></i>
                      <p className={`MonthlyDdTwo ${openMonthlyTwo? 'active' : 'inactive'}`}>
                    <MonthlyDropdTwo />
                  </p>
                    </span>
                  </div>
                  <div className="MenuB">
                    <div className="GraphSVG">
                      <svg class="peity" height="90" width="90"><path d="M 45 0 A 45 45 0 0 1 58.905764746872634 87.79754323328191 L 51.180339887498945 64.02113032590307 A 20 20 0 0 0 45 25" fill="#28D094"></path><path d="M 58.905764746872634 87.79754323328191 A 45 45 0 0 1 0 45.00000000000001 L 25 45 A 20 20 0 0 0 51.180339887498945 64.02113032590307" fill="#1E9FF2"></path><path d="M 0 45.00000000000001 A 45 45 0 0 1 44.99999999999999 0 L 44.99999999999999 25 A 20 20 0 0 0 25 45" fill="#FF9149"></path></svg>
                    </div>
                    <div className="dots" id="dots">
                      <div>
                        <span></span>
                        Mobile
                      </div>
                      <div>
                        <span></span>
                        TV
                      </div>
                      <div>
                        <span></span>
                        AC
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="BoxTwo" >
              <div className="Box"  id='Box'>
                <div className="Title">
                  <div className="Menu"  onClick={()=>{setopenMonthlyThree(!openMonthlyThree)}}>

                    <span>Orders</span>
                    <span>Weekly
                      <i class="fas fa-caret-down"></i>
                      <p className={`MonthlyDdThree ${openMonthlyThree? 'active' : 'inactive'}`}>
                    <MonthlyDropdThree />
                  </p>
                    </span>
                  </div>
                  <div className="GraphHeadB">
                    <h2>$421 458.45</h2>
                    <small>-21%
                      <i class="fas fa-arrow-down"></i>
                    </small>
                  </div>
                  <div style={{width:"350px",marginTop:"-60px",marginLeft:"-30px"}}>
                  {/* <Line data={data} options={options} option={option}></Line> */}
                  <ChartOne/>
                  </div>
                </div>
              </div>
              <div className="Box" id='Box'>
                <div className="Title">
                  <div className="Menu" onClick={()=>{setopenMonthlyFour(!openMonthlyFour)}}>
                    <span>Daily Sale</span>
                    <span>Today
                      <i class="fas fa-caret-down"></i>
                      <p className={`MonthlyDdFour ${openMonthlyFour? 'active' : 'inactive'}`}>
                    <MonthlyDropdFour />
                  </p>
                    </span>
                  </div>
                  <div className="MenuB">
                    <div className="GraphSVG">
                      <svg class="peity" height="90" width="90"><rect fill="#666EE8" x="6" y="0" width="18" height="90"></rect><rect fill="#FF4961" x="36" y="15.020107238605888" width="18" height="74.97989276139411"></rect><rect fill="#1E9FF2" x="66.00000000000001" y="57.28552278820375" width="17.99999999999997" height="32.71447721179625"></rect></svg>
                    </div>
                    <div className="dotsB" id="dots">
                      <div style={{ whiteSpace: "nowrap" }}>
                        <span></span>
                        Abu Dhabi
                      </div>
                      <div>
                        <span></span>
                        Miami
                      </div>
                      <div>
                        <span></span>
                        London
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="PanelC">
          <div className="Accordions">
          <div className="accordion">
          <div className="accordion-header" style={{display:"flex",justifyContent:"space-between"}} onClick={toggleAccordion}>
            <h3 className="AHead">Traffic Sources</h3>
            <div style={{display:"flex",justifyContent:"space-around",gap:"20px",color:"#999"}}>
            <i class="fas fa-expand-arrows-alt" style={{right:"0px"}}></i>
            <span className={`icon ${isOpen ? 'open' : 'closed'}`} ></span>
            <i class="fas fa-times"></i>
            </div>
          </div>
          {isOpen && <div className="accordion-content">
            <div className="Traffic">
            <div className="Years">
              <div className="Yea">
              <div className="LastYear">Last Year</div>
              <div className="LastMonth">Last Month</div>
              <div className="LastWeek">Last Week</div>
              </div>
              <div className='Yeap'>
                <span></span>Direct 
                <span></span>Referrals
                <span></span>Search
                <span></span>Social
              </div>
            </div>
            <div className="MorrisGraph" style={{cursor:"pointer"}}>
              <LineChart/>
            </div>
            </div>
          </div>}
    </div>
          </div>
          <div className="Todo">
          <div className="accordion">
          <div className="accordion-header" style={{display:"flex",justifyContent:"space-between",backgroundColor:"#ff9149"}} onClick={toggleAccordionA}>
            <h3 className="AHead" style={{color:"white"}}> To Do List</h3>
            <div style={{display:"flex",justifyContent:"space-around",gap:"20px",color:"white"}}>
            <i class="fas fa-expand-arrows-alt" style={{right:"0px"}}></i>
            <span className={`Them ${isOpenA ? 'openA' : 'closedB'}`} style={{color:"white"}} id="Them"></span>
            <i class="fas fa-times"></i>
            </div>
          </div>
          {isOpenA && <div className="accordion-content">
            <div className="List" id='List'>
              <ul>
                <li>
                  <div className="DivOne">
                    <div>
                  <i class="fas fa-ellipsis-v"></i>
                  <i class="fas fa-ellipsis-v"></i>
                    </div>
                  <input type="checkbox" />
                  <span>Phasellus interdum</span>
                  </div>
                  <div>
                    <div className="DivTwo" style={{background:"#1e9ff2",color:"white",width:"65px",borderRadius:"5px"}}>
                    <i class="fas fa-clock"></i>
                    <span>4 hour's</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="DivOne">
                  <div>
                  <i class="fas fa-ellipsis-v"></i>
                  <i class="fas fa-ellipsis-v"></i>
                    </div>
                  <input type="checkbox" />
                  <span> Nulla vitae purus</span>
                  </div>
                  <div>
                    <div  className="DivTwo" style={{background:"#ff4961",color:"white",width:"65px",borderRadius:"5px"}}>
                    <i class="fas fa-clock"></i>
                    <span>2 hour's</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="DivOne">
                  <div>
                  <i class="fas fa-ellipsis-v"></i>
                  <i class="fas fa-ellipsis-v"></i>
                    </div>
                  <input type="checkbox" />
                  <span> Quisque sodales</span>
                  </div>
                  <div>
                    <div  className="DivTwo" style={{background:"#ff9149",color:"white",width:"65px",borderRadius:"5px"}}>
                    <i class="fas fa-clock"></i>
                    <span>1 day</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="DivOne">
                  <div>
                  <i class="fas fa-ellipsis-v"></i>
                  <i class="fas fa-ellipsis-v"></i>
                    </div>
                  <input type="checkbox" />
                  <span>  Proin nec mi porta</span>
                  </div>
                  <div>
                    <div  className="DivTwo" style={{background:"#28d094",color:"white",width:"65px",borderRadius:"5px"}}>
                    <i class="fas fa-clock"></i>
                    <span>3 days</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="DivOne">
                  <div>
                  <i class="fas fa-ellipsis-v"></i>
                  <i class="fas fa-ellipsis-v"></i>
                    </div>
                  <input type="checkbox" />
                  <span> Maecenas scelerisque </span>
                  </div>
                  <div>
                    <div  className="DivTwo" style={{background:"#666ee8",color:"white",width:"65px",borderRadius:"5px"}}>
                    <i class="fas fa-clock"></i>
                    <span>1 week</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="DivOne">
                  <div>
                  <i class="fas fa-ellipsis-v"></i>
                  <i class="fas fa-ellipsis-v"></i>
                    </div>
                  <input type="checkbox" />
                  <span> Vivamus nec orci</span>
                  </div>
                  <div>
                    <div  className="DivTwo" style={{background:"#1e9ff2",color:"white",width:"65px",borderRadius:"5px"}}>
                    <i class="fas fa-clock"></i>
                    <span>1 month</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            </div>}
    </div>
          </div>
        </div>

        <div className="PanelD">
          <div className="TaskManager">
          <div className="accordionB">
          <div className="accordion-header" style={{display:"flex",justifyContent:"space-between"}} onClick={toggleAccordionB}>
            <h3 className="AHead">Task Manager</h3>
            <div style={{display:"flex",justifyContent:"space-around",gap:"20px",color:"#999"}}>
            <i class="fas fa-expand-arrows-alt" style={{right:"0px"}}></i>
            <span className={`iconB ${isOpenB ? 'openB' : 'closed'}`} ></span>
            <i class="fas fa-times"></i>
            </div>
          </div>
          {isOpenB && <div className="accordion-content">
            <div className="Tasks">
              <ul>
                <li>
                  <div className="TaskHead">#</div>
                  <div className="TaskHead" >Task Description</div>
                  <div className="TaskHead" >Priority</div>
                  <div className="TaskHead" >Task Date</div>
                  <div className="TaskHead" >Status</div>
                  <div className="TaskHead" >User</div>
                </li>

                <li>
                  <div className="TaskContent">1.</div>
                  <div className="TaskContent" >Nullam rhoncus</div>
                  <div className="TaskContent Tc" style={{background:"#ff4961",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Highest</div>
                  <div className="TaskContent" >2019-Apr-04</div>
                  <div className="TaskContent Tc" style={{background:"#1e9ff2",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Open</div>
                  <div className="TaskContent" >Joshua</div>
                </li>

                <li>
                  <div className="TaskContent">2.</div>
                  <div className="TaskContent" style={{wordWrap:"break-word"}}>Consectetur Adipiscing</div>
                  <div className="TaskContent Tc" style={{background:"#ff9149",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Highest</div>
                  <div className="TaskContent" >2019-Apr-15</div>
                  <div className="TaskContent Tc" style={{background:"#28d094",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Resolved</div>
                  <div className="TaskContent" >Andrew</div>
                </li>

                <li>
                  <div className="TaskContent">3.</div>
                  <div className="TaskContent" >Nullam rhoncus</div>
                  <div className="TaskContent Tc" style={{background:"#ff4961",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Highest</div>
                  <div className="TaskContent" >2019-Apr-04</div>
                  <div className="TaskContent Tc" style={{background:"#1e9ff2",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Open</div>
                  <div className="TaskContent" >Joshua</div>
                </li>

                <li>
                  <div className="TaskContent">4.</div>
                  <div className="TaskContent" >Vitae Lorem</div>
                  <div className="TaskContent Tc" style={{background:"#ff4961",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Highest</div>
                  <div className="TaskContent" >2019-Apr-04</div>
                  <div className="TaskContent Tc" style={{background:"#1e9ff2",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px",display:"flex",justifyContent:"flex-end"}}>On hold</div>
                  <div className="TaskContent" >James</div>
                </li>

                <li>
                  <div className="TaskContent">5.</div>
                  <div className="TaskContent" >Nullam rhoncus</div>
                  <div className="TaskContent Tc" style={{background:"#ff4961",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Highest</div>
                  <div className="TaskContent" >2019-Apr-04</div>
                  <div className="TaskContent Tc" style={{background:"#1e9ff2",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px",display:"flex",justifyContent:"flex-start"}}>Open</div>
                  <div className="TaskContent" >Joshua</div>
                </li>

                <li>
                  <div className="TaskContent">6.</div>
                  <div className="TaskContent" >Nullam rhoncus</div>
                  <div className="TaskContent" style={{background:"#ff4961",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Highest</div>
                  <div className="TaskContent" >2019-Apr-04</div>
                  <div className="TaskContent" style={{background:"#1e9ff2",color:"white",borderRadius:"5px",fontSize:"12px",padding:"5px 10px"}}>Open</div>
                  <div className="TaskContent" >Joshua</div>
                </li>
              </ul>
            </div>
          </div>}
    </div>
          </div>

          <div className="WebsiteTraffic">
          <div className="accordionC">
          <div className="accordion-header" style={{display:"flex",justifyContent:"space-between"}} onClick={toggleAccordionC}>
            <h3 className="AHead">Website Traffic</h3>
            <div style={{display:"flex",justifyContent:"space-around",gap:"20px",color:"#999"}}>
            <i class="fas fa-expand-arrows-alt" style={{right:"0px"}}></i>
            <span className={`iconC ${isOpenC ? 'openC' : 'closed'}`} ></span>
            <i class="fas fa-times"></i>
            </div>
          </div>
          {isOpenC && <div className="accordion-content Acc">
            <h3>Hello</h3>
          </div>}
    </div>

          <div className="Weather">
            <div className="weatherreport">
              <span style={{fontSize:"48px",color:"white",padding:"0px 35px"}}>27°<br /><small>C</small></span>
              <span style={{fontSize:"18px",color:"white",fontWeight:"400"}}>Miami,<br />USA</span>
            </div>
            <div className="WDate">
            <i class="fas fa-cloud-sun-rain fa-lg"></i>
              <span style={{fontSize:"18px",color:"white",fontWeight:"500"}}>20.5.2018</span>
            </div>
          </div>
          </div>

          <div className="USA">
            <div className="USAHead">USA</div>
            <div style={{width:"100%",height:"400px"}}>
              <UsaMap />
            </div>
            {/* <div style={{width:"100%",height:"400px"}}>
            <PieChart/>
            </div> */}
          </div>

        </div>

        <div className="PanelFooter">
          <div className='Footer'>
            <div>© 2018 <span className="MPT">Multi-Purpose Themes.</span> All Rights Reserved.</div>
            <div className="FAQ">
              <span>FAQ </span>
              <span style={{color:"rgb(120, 131, 148)"}}>•</span>
              <span>Purchase Now</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboad
