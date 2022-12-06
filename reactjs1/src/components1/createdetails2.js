import React,  { Component } from "react";
import  { useState } from "react";
import { Image } from 'antd';
import Axios from "axios";
import { Button, Form, Input } from "antd";
import axios from "axios";
const CreateDetails = () => {

  const [imagedata, setImagedata] = useState({});
  const componentDidMoumt = () =>{
    getImages();
  }
    const getImages =()=>{
      axios.get("http://localhost:8000/api/images").then(res=>{
        if(res.data){
          this.setState({
            images: res.data 
          })
        }
      })
    }
 
  const handleChange = (file) =>{
    setImagedata(file[0]);

    };
   

    const onFinish = () => {
      let formDaTa = new FormData;
      formDaTa.append("image",imagedata);
      console.log(imagedata.name)
        Axios.post("http://localhost:8000/api/upload",formDaTa)
      .then(res => {
        console.log(formDaTa)

      })
      
     
    }
  

      return (
      <>
         {/* <form  onSubmit={submitForm}>
          <input type="file" name="image" id="image" onChange={e =>handleChange(e.target.files)} />
          <button type="submit">Upload</button>
        </form> */}

        <Form>
          <Form.Item
          name="name_details"
          label="name_details">
            <Input />

          </Form.Item>
          <Form.Item name="file" label="file">
            <Input type="file" name="image" id="image" onChange={e =>handleChange(e.target.files)} />
          </Form.Item>
          <Form.Item >
            <Button type="submit" onClick={()=>onFinish()}>Submit</Button>
          </Form.Item>
          <Form.Item>
          <Image src={"http://localhost/laravel/react-js-auth/larvamoi/public/images/"+"1669967516.jpg"} width={"100px"} height={"100px"} />
          </Form.Item>

        </Form>
        
     
      </>
     
      )
    }
    

export default CreateDetails;

// import React ,{Component} from "react";
// export default class CreateDetails extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       image : ''

//     }

//   }
//   handleChange = (e) =>{
//     this.setState({
//       image: e.target.files[0]
//     });
//   }
//   render(){
//     return(
//       <Form>
//            <Form.Item name="file" label="file">
//             <Input type="file" name="image" id="image" onChange={e =>handleChange(e.target.files)} />
//            </Form.Item>
//            <Form.Item >
//              <Button type="submit" onClick={()=>onFinish()}>Submit</Button>
//           </Form.Item>
//            <Form.Item>
//           </Form.Item>

//         </Form>
//     )
//   }
// }