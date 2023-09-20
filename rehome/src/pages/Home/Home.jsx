import './Home.scss';
import React from 'react';
import Img1 from './asset/left.png'
import Img2 from './asset/card1.png'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import NavBar from '../../components/Navbar/Navbar'





const Carddata = [
  {
    main: Img2,
    head: "Citizen",
    para: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    main: Img2,
    head: "Today Static",
    para: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    main: Img2,
    head: "Police login",
    para: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
  {
    main: Img2,
    head: "Cwc Login",
    para: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
  },
];

export default function Home() {
    return (
        <div id="main">

            <div className="innerdiv">
                <div className="leftinnerdiv">
                    <div className="heading">
                        <h1>Let's Reunite every <span>Missing</span> Child </h1>
                        <p>of the country with their families</p>
                    </div>
                    <div className="innerbtn">
                        <button className="bt1">Report Missing Child</button>
                        <button className="bt2">Found Missing Child</button>
                    </div>
                </div>
                <div className="rightinnerdiv">
                    <img src={Img1}/>
                </div>
            </div>

            {/* card div */}



                <div id="card-section">
                    {Carddata.map((data, i) => (
                        <div className="card">
                            <img src={data.main} />
                            <h3>{data.head}</h3>
                            <p>{data.para}</p>
                            <span className='icon'>
                                <ArrowCircleRightOutlinedIcon />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};
