import React,{useState} from 'react';
import AppListUplode from './AppListUplode';
import NaverIcon from'./NaverIcon.png';
import LOL from './LOL.png'
function AppList() {
    const [Apps, setApps] = useState([
        {
            id: 0,
            name: 'Naver',
            icon: NaverIcon,
            use: 'Naver app developer',
            day: '2021-01-16',
            size: '',
            version: '5.1.21'

        },
        {

            id: 1,
            name: 'Leauge of legend',
            icon: LOL,
            use: 'Riot games',
            day: '2021-03-15',
            size: '',
            version: '1.4.3.2'
        },
        {

            id:2,
            name: 'google',
            icon: "",
            use: 'google LCC2',
            day: '2020-11-10',
            size: '',
            version: '2.1.2223'
        }
        ,{
            id:3,
            name: 'google123',
            icon: '',
            use: 'google LCC2',
            day: '2020-11-10',
            size: '',
            version: '2.1.2223'
        }
    ]);

    const Remove=(id)=>{
       setApps(Apps.filter((App)=>App.id!==id));
    }


    return(
        <>
            {
                Apps.map((app)=>{
                return <AppListUplode key={app.id} App={app} Remove={Remove}/>
        })}
        
        </>
      )
}
export default AppList;