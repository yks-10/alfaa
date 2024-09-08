import styles from "../routes/style";
import BannerImage from "../../images/index/banner.png";
import Psf from "../../images/index/psf.png"
import Sss from "../../images/index/sss.png"
import Alfaa from "../../images/index/alfaa.png"
const Index = () => {
    return (
        <>
            <div style={{...styles.fontStyles.fjallaOne, fontSize:'54px' ,marginTop: '10px', textAlign: 'center'  }}>
                <span style={styles.headText}>
                    ALFA
                </span> PEB LIMITED
            </div>
            <div style={{ margin:'30px 40px 10px 40px'}}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={BannerImage} alt="banner" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div style={{ marginTop: '10px'}}>
                    <span style={{...styles.headText, fontSize: '30px'}}> THE COMPANY</span>
                    <p style={styles.bodyText}>
                    We, at Alfa PEB family, would be extremely pleased to serve you as a potential buyer
                    of our products. With a legacy of more than two decades, Alfa has continuously evolved
                    and proved to be India's leading manufacturer of Pre Engineered Building, Multi-story
                    Building & Sandwich Puf Panel.
                    </p>
                    <hr style={{ color: '#ffa31a'}}/>
                </div>
                <div style={{ marginTop: '30px'}}>
                    <span style={{...styles.headText, fontSize: '30px'}}> PRIMARY STEEL FRAMING</span>
                    <p style={styles.bodyText}>
                    ALFA pre-engineered buildings are custom-designed to meet your exact
                    requirements. Each is designed by professional, experienced engineers and
                    manufactured to exact tolerances under rigid quality-controlled plant conditions.
                    The steel plates are painted with a minimum of 25 Microns DFT of red oxide primer.
                    Some of the common primary steel structural framing systems are mentioned
                    below.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Psf} alt="psf" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <hr style={{ color: '#ffa31a'}}/>
                </div>
                <div style={{ marginTop: '30px'}}>
                    <span style={{...styles.headText, fontSize: '30px'}}>STRUCTURAL
                    SUB SYSTEMS</span>
                    <p style={styles.bodyText}>
                    The Strength of the Alfa Pre-Engineered Building System Lies
                    in its ability to incorporate a large number of structural
                    subsystems that use standard components and standard design
                    approaches to satisfy a wide range of custom requirements.
                    Some of which are shown below
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={Sss} alt="sss" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <hr style={{ color: '#ffa31a'}}/>
                </div>
                <div className="grid-container" style={{ marginTop: '30px'}}>
                    <div className="left">
                        <div style={{ display: 'flex'}}>
                            <img src={Alfaa} alt="sss" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    </div>
                    <div className="right" style={{ marginTop: '30px'}}>
                        <div>
                            <span style={{...styles.headText, fontSize: '30px', marginTop: '10px' }}>MANUFACTURING PLANTS</span>
                        </div>
                        <div>
                            <h3 style={{ ...styles.fontStyles.fjallaOne }}> HOSUR</h3>
                            <card style={{ ...styles.contact, justifyContent: 'center' }}>
                                Survey No162,163,164/2, & 167
                                Kalukondapalli
                                Village Thally Road,
                                Hosur - 635114
                            </card>
                        </div>
                        <div>
                            <h3 style={{ ...styles.fontStyles.fjallaOne }}> AHMEDABAD</h3>
                            <card style={{ ...styles.contact,justifyContent: 'center' }}>
                                Sy.No.192, Paikki Khata
                                No.254& 212, Behind Intas Pharma,
                                Near Matoda Patia, Changodar,
                                Sarkhej-Bavla Highway,
                                Ahmedabad-382 213.
                            </card>
                        </div>
                        <hr style={{ color: '#ffa31a'}}/>
                    </div>
                </div>
                <span style={{marginTop:'10px'}}> BRANCHES</span>
                <p > CHENNAI | KOCHI | HYDERABAD | PUNE </p>
            </div>
        </>
    );
}

export default Index;
