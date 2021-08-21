import React from 'react';
import SideMenu from './SideMenu';
import MainTable from '../Components/MainTable';
import UsersTable from '../Components/UsersTable';
import Report from './ReportPage';
import { GET_USERS,GET_INSURANCES} from "../Constants/urlConstants";
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../Redux/Actions/LocationActions';

export default function LandingPage(userDetails) {
  const dispatch = useDispatch();
  const loginUserReducer = useSelector(state => state.loginUserReducer)

  const style = {
    height: "100%",
    width:"100%",
    "marginLeft": "0%",
    "marginRight": "0%",
    "paddingLeft": "0px",
    "paddingRight": "0px",
    "backgroundImage": "linear-gradient(269.7deg, #01ADD5 0.26%, #005775 99.4%)",
    "minHeight": "781px"
  };
  const [menu, setMenu] = React.useState("Insurance");
  const [user, setuserDetails] = React.useState({});
  const [allUsers,setallUsers] = React.useState({
    allUsers: [],
    usersErrorMessage: "",
    isUserError: false
  });
  const [allInsurances,setallInsurances] = React.useState({
    allInsurances: [],
    insurenceErrorMessage: "",
    isInsuranceError: false
  });


  React.useEffect(() => {
    setuserDetails(JSON.parse(userDetails.userDetails));
    // eslint-disable-next-line
    getInsurences();
    // eslint-disable-next-line
    getUsers();
    // eslint-disable-next-line
    dispatch(getLocations());
    // eslint-disable-next-line
  },[userDetails]);

  const handleCallRequiredApis = () => {
    getInsurences();
    getUsers();
  }

  const getUsers = () => {
    var url = GET_USERS;
  
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
          return res.json();
      })
      .then((dta) => {
        
        if(dta.status === 200) {
         
          setallUsers({...allUsers, isUserError: false, allUsers:dta.response});
        } else {
          setallUsers({...allUsers, isUserError: true, usersErrorMessage: dta.error});
        }
      });
  };

  //get All insurences
  const getInsurences = () => {

    const LocationId = loginUserReducer?.data?.LocationId;
    const RoleId = loginUserReducer?.data?.RoleId;
    let url = GET_INSURANCES;
    if(Number(RoleId) === 2) {
      url = url + `/${LocationId}`;
    }
  
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
          return res.json();
      })
      .then((data) => {
        
        if(data.status === 200) {
       
          setallInsurances({...allInsurances, isInsuranceError: false, allInsurances:data.response});
        } else {
          setallInsurances({...allInsurances, isInsuranceError: true, insurenceErrorMessage: data.error});
        }
      });
  };


  const handleMenu = (value) => {
   setMenu(value);
  };

  let renderComponent = [];

  switch(menu.toUpperCase()) {
    case "USERS":
      renderComponent = <UsersTable setUpdatePage={handleCallRequiredApis}  user={user} allUsers={allUsers}/>;
      break;
      case "REPORT":
      renderComponent = <Report allInsurances={allInsurances}/>;
      break;
      default:
      renderComponent =  <MainTable  setUpdatePage={handleCallRequiredApis} user={user} allInsurances={allInsurances}/>;

    }

  return (
    <div style={style}>
        <SideMenu user={user} handleMenu={handleMenu} heading ={menu}/>
        {renderComponent}
    </div>
  );
}

