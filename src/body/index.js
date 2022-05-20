import React, { useEffect, useState } from 'react'
import Button  from '@mui/material/Button';
import './style.css'
import Box from '@mui/material/Box';
import { Avatar, IconButton,  List, ListItem, ListItemAvatar,  ListItemText,  Table, TableBody, TableRow, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export const Body = () =>{
    const columns=[{field:'Sl_no'},
                {field:'Name'},
                {field:'Position'},
                {field:'EmailId'}]
    const rows=[
    {Sl_no:1,Name:'Varun Gupta',Position:'Recruiter',EmailId:'varungupta12@spottabl.com'},
    {Sl_no:2,Name:'Abhijeet Srivastava',Position:'Senior Manager',EmailId:'abhijeet543@spottabl.com'},
    {Sl_no:3,Name:'Abhinav Kumar',Position:'Developer',EmailId:'abhinav123@spottabl.com'},
    {Sl_no:4,Name:'Aditya Raj',Position:'Solutions Engineer',EmailId:'adityaraj837@spottabl.com'},
    {Sl_no:5,Name:'Akash Kumar',Position:'Data Engineer',EmailId:'akashkumar111@spottabl.com'},
    {Sl_no:6,Name:'Akriti Singh',Position:'Associate Enginner',EmailId:'akritisingh765@spottabl.com'},
    {Sl_no:7,Name:'Akshat Singh',Position:'Solutions Engineer',EmailId:'akshatkumar230@spottabl.com'},
    {Sl_no:8,Name:'Chaman Agarwal',Position:'Client Manager',EmailId:'chamanagarwal456@spottabl.com'},
    {Sl_no:9,Name:'Charu Kumari',Position:'Recruiter',EmailId:'charukumari741@spottabl.com'},
    {Sl_no:10,Name:'Harsh Choudary',Position:'Data Analyst',EmailId:'harsh000@spottabl.com'},
    {Sl_no:11,Name:'Bhavesh Kumar',Position:'Senior recruiter',EmailId:'bhaveshkumar3@spottabl.com'},
    {Sl_no:12,Name:'Priyanka Singh',Position:'Devops engineer',EmailId:'priyankasingh123@spottabl.com'},
    {Sl_no:13,Name:'Pragna Reddy',Position:'Data analyst',EmailId:'pragna239@spottabl.com'},
    {Sl_no:14,Name:'Krishnil Bhojani',Position:'Web developer',EmailId:'krishnil999@spottabl.com'},
    {Sl_no:15,Name:'Shristi Varma',Position:'Production Manager',EmailId:'shristi5@spottabl.com'},
    {Sl_no:16,Name:'Vanishri Rajan',Position:'Recruiter',EmailId:'vanishri896@spottabl.com'},
    {Sl_no:17,Name:'Vanshika Angrish',Position:'Web developer',EmailId:'vanshika174@spottabl.com'},
    {Sl_no:18,Name:'Vidya Nagesh',Position:'HR',EmailId:'vidyanagesh495@spottabl.com'},
    {Sl_no:19,Name:'Sneha Singh',Position:'Senior recruiter',EmailId:'snehasingh@spottabl.com'},
    {Sl_no:20,Name:'Preethi Varma',Position:'Quality Analyst',EmailId:'preethivarma55@spottabl.com'},
    {Sl_no:21,Name:'Satya Narendra',Position:'Production Manager',EmailId:'satyanarendra@spottabl.com'},
    {Sl_no:22,Name:'Deepak Kumar',Position:'HR',EmailId:'deepakkumar@spottabl.com'},
    {Sl_no:23,Name:'Deepanshu Durgam',Position:'Frontend Developer',EmailId:'deepanshu234@spottabl.com'},
    {Sl_no:24,Name:'Deepti Mehra',Position:'Backend Developer',EmailId:'deeptimehra88@spottabl.com'},
    {Sl_no:25,Name:'Divya Jain',Position:'System Administrator',EmailId:'divyajain989@spottabl.com'},
    {Sl_no:26,Name:'Falak Khan',position:'Data Engineer',EmailId:'falakkhan@spottabl.com'},
    {Sl_no:27,Name:'Gurpreet Singh',Position:'Systems Engineer',EmailId:'gurpreetsingh@spottabl.com'},
    {Sl_no:28,Name:'Vamshi Krishna',Position:'Junior Data Analyst',EmailId:'vamshikrishna@spottabl.com'},
    {Sl_no:29,Name:'Vinayak Kumar',Position:'Assistant Data Scientist',EmailId:'vinayak938@spottabl.com'},
    {Sl_no:30,Name:'Deepak Gupta',Position:'Java Developer',EmailId:'deepakgupta@spottabl.com'}
    ]

    let rows_data=[];
    let i=0;
    for(i=0;i<3;i++){
        rows_data[i]=rows[i];
    }
    const [allData,setAllData]=useState([rows]);
    const [tableData,setTableData]=useState([rows_data]);
    const [text,SetText]=useState([]);
    const [suggestions,setSuggestions]=useState([]);
    

    useEffect(()=>{
        setAllData(rows);
    },[]);


    useEffect(()=>{
        setTableData(rows_data);
    },[]);
  

    function stringAvatar(Name) {
        return {
          
          children: <strong>{Name?.split(' ')[0][0]}{Name?.split(' ')[1][0]}</strong>
          
        };
      }
      

    const onChangeHandler = (text) => {
        let matches=[]
        if(text.length>0){
            matches=allData.filter(user=>{
                const regex=new RegExp(`${text}`,"gi");
                return user.EmailId.match(regex) || user.Name.match(regex)
            })
        }
        console.log('matches',matches)
        setSuggestions(matches)
        SetText(text)
    }



    const deleteTableRows = (index) =>{
        const row=[...tableData];
        row.splice(index,1);
        setTableData(row);
    }
    


    const onSuggestHandler = (text) => {
        SetText(text);
        setSuggestions([]);
    }
   

    const addHandler = (e) =>{
        if(allData.filter(e => e===allData.Name)){
            const index = allData.findIndex(object => {
                return object.Name === e;
              });
            const newUser=allData[index];
            const newUsers=[...tableData,newUser];
            setTableData(newUsers);
            SetText([]);
        } 
    }
   
    return(
        <div className='container'>
            <div className='box'>
                <div id='content'>
                    <h2>Customer Success Managers</h2>
                    <div className='search'>
                    <input
                    className='suggest' 
                    onChange={e =>onChangeHandler(e.target.value)} 
                    placeholder='Add by Name or email'
                    value={text}
                    />
                     <div className='suggestionbox'>
                         <Table >
                             <TableBody>
                             {suggestions && suggestions.map((suggestion,i) =>
                                 <TableRow key={i}>
                            <List>
                                <ListItem button divider 
                                 style={{width:'970px'}}
                                 onClick={()=>onSuggestHandler(suggestion.Name)}
                                 >
                                    <ListItemAvatar>
                                                <Avatar 
                                                sx={{color:'black'}}
                                                style={{width:'60px',height:'60px',marginTop:'5px',marginBottom:'10px',backgroundColor:'rgb(135, 187, 221)'}}
                                                {...stringAvatar(suggestion.Name)}
                                                />
                                    </ListItemAvatar>
                                    <ListItemText >
                                        <Typography style={{marginLeft:'10px',color:'black',fontFamily:'Trebuchet MS',fontSize:'25px'}}>
                                            <strong>{suggestion.Name}</strong>
                                        </Typography>
                                        
                                        <Avatar sx={{marginLeft:'10px',color:'gray',backgroundColor:'white',width:'20px',height:'20px'}}></Avatar>
                                        <Typography style={{marginBottom:'10px',marginLeft:'35px',marginTop:'-20px',color:'black',fontFamily:'Trebuchet MS',fontSize:'15px'}}><strong>{suggestion.Position} . {suggestion.EmailId}</strong></Typography>
                                        
                                    </ListItemText>
                                </ListItem>
                             </List>
                             </TableRow>)}
                             </TableBody>
                             </Table>
                     </div>
                    <Button 
                    variant="contained" 
                    style={{position:'absolute',width:'150px',height:'57px',backgroundColor:'blue',marginTop:'-2px'}}
                    onClick={()=>addHandler(text)}>Add CSM</Button>
                    </div>
                        <Box 
                        sx={{
                        boxShadow: 2,
                        width: '1120px',
                        height: '300px',
                        overflow:'auto',
                        backgroundColor: 'white',
                        border:'1px solid white',
                        marginTop:'110px',
                        display:'flex',
                        
                        }}>
                            <Table>
                                <TableBody>
                                    {tableData.map((item,index) => {
                                        return <TableRow key={index}>
                                            <List>
                                                <ListItem button divider style={{width:'1100px',marginTop:'-7.5px'}}>
                                                    <ListItemAvatar>
                                                        <Avatar 
                                                        sx={{color:'black'}}
                                                        style={{width:'60px',height:'60px',marginTop:'5px',marginBottom:'10px',backgroundColor:'rgb(135, 187, 221)'}}
                                                        {...stringAvatar(item.Name)}
                                                        />
                                                    </ListItemAvatar>
                                                    <ListItemText >
                                                        <Typography style={{marginLeft:'10px',color:'black',fontFamily:'Trebuchet MS',fontSize:'25px'}}>
                                                            <strong>{item.Name}</strong>
                                                        </Typography>
                                                        <Typography style={{marginBottom:'10px',marginLeft:'13px',color:'black',fontFamily:'Trebuchet MS',fontSize:'15px'}}><strong>{item.Position}</strong></Typography>
                                                    </ListItemText>
                                                    <IconButton edge="end" onClick={() =>
                                                    (deleteTableRows(index))}>
                                                        <DeleteIcon style={{color:'blue'}} />
                                                    </IconButton>
                                                </ListItem>
                                            </List>
                                    </TableRow>
                                    })}
                                </TableBody>
                            </Table>  
                        </Box>    
                </div>
            </div>
        </div>
  )
}


