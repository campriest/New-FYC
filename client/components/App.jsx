import React from 'react';
import styled from 'styled-components';




class App extends React.Component{





render() {

  return (

        <div>
            <Mainbody/>
            <ColumnOne/>
            <ColumnTwo/>
            <ColumnThree/>
            <MenuBar/>

            <Sub/>
            <Menu/>
            <Logo/>


        </div>



        );
    }
}


const SubMenu = styled.div`
  display: inline;
  position: fixed;
  margin-left: -8px;
  margin-top: 49px;
  width: 100%;
  height: 25px;
  background-color: rgb(255,255,255);
  border: solid 1px;
  border-color: rgb(90,90,90);
  border-right: none;
  border-left:none;

`;

const TodayText = styled.p`

  display: inline;
  position: absolute;
  margin-top: 8px;
  margin-left: 39%;
  font-size: 12px;
  font-family: Amiko, sans-serif;
  color: rgb(0,0,0);

`;

const Trending = styled.p`
  display:inline;
  position: absolute;
  margin-top:8px;
  margin-left: 44%;
  font-size:12px;
  font-family: Amiko, sans-serif;
  color: rgb(0,0,0);


`;

const Yesterday = styled.p`
display:inline;
position: absolute;
margin-top:8px;
margin-left: 51%;
font-size:12px;
font-family: Amiko, sans-serif;
color: rgb(0,0,0);

`;

const Yours = styled.p`
display: inline;
position: absolute;
margin-top: 8px;
margin-left: 58%;
font-size: 12px;
font-family: Amiko, sans-serif;
color: rgb(0,0,0);

`;




const OneColumn = styled.div`
display: inline;
position: absolute;
margin-left: 2.5%;
width: 30%;
height: 100%;
background-color: rgb(250,250,250);


`;

const FirstCard = styled.div`
  display: inline;
  position: absolute;
  margin-top: 300px;
  margin-left: 5%;
  width: 20%;
  height: 200;
  background-color: rgb(150,150,150);


`;

class ColumnOne extends React.Component{



render(){


  return (

      <OneColumn>
          <FirstCard>


          </FirstCard>



      </OneColumn>

      );
  }


}

const TwoColumn = styled.div`
display:inline;
position: absolute;
margin-left:35%;
width: 30%;
height: 100%;
background-color: rgb(250,250,250);
`;


class ColumnTwo extends React.Component{



render(){

    return (

      <TwoColumn>

      </TwoColumn>

      );
  }


}



const ThreeColumn = styled.div`
display:inline;
position: absolute;
margin-left: 67.5%;
Width: 30%;
height: 100%;
background-color: rgb(250, 250, 250);

`;




class ColumnThree extends React.Component{

  render(){


    return(
      <ThreeColumn>






      </ThreeColumn>


    );
  }
}

class Sub extends React.Component{

  render(){

    return (


    <SubMenu>

        <TodayText>TODAY</TodayText>
        <Trending>TRENDING</Trending>
        <Yesterday>YESTERDAY</Yesterday>
        <Yours>YOURS</Yours>

    </SubMenu>

    );

  }

}


class Card extends React.Component{


}


const MenuBox = styled.div`
  display: inline;
  position: fixed;
  margin-top: -5px;
  margin-left: 80%;
  width: 190px;
  height: 60px;
`;


const MenuLineOne = styled.div`
display: inline;
position: absolute;
margin-top: 10px;
margin-left: 92%;
background: black;
width: 25px;
height: 3px;
border-radius: 12px;
`;

const MenuLineTwo = styled.div`
display: inline;
position: absolute;
margin-top: 20px;
margin-left: 92.0%;
background: black;
width: 25px;
height: 3px;
border-radius: 12px;
`;

const MenuLineThree = styled.div`
display: inline;
position: absolute;
margin-top: 30px;
margin-left: 92%;
background: rgb(0,0,0);
width: 25px;
height: 3px;
border-radius: 12px;

`;


const Box = styled.div`
display: none;
position: absolute;
margin-top: 100px;
margin-left: 30%;
width: 130px;
height: 200px;
background: rgb(235, 235, 235);

`;

const ChoiceOne = styled.div`
display: inline;
position: absolute;
margin-left: 0%;
margin-top: 30px;
font-family: Amiko, sans-serif;
width: 130px;
border-top: none;
border-bottom: solid 2px;
border-bottom-color: rgb(190, 190, 190);
`;

const TextOne = ChoiceOne.withComponent('p')

const NewTextOne = TextOne.extend`

margin-top: -20px;
margin-left: 5%;
border:none;
`;



const ChoiceTwo = styled.div`
display: inline;
position: absolute;
margin-left: 0%;
margin-top: 57px;
font-family: Amiko, sans-serif;
width: 130px;
border-bottom: solid 2px;
border-bottom-color: rgb(190,190,190);

`;

const TextTwo = ChoiceTwo.withComponent('p')

const NewTextTwo = TextTwo.extend`

margin-top: -20px;
margin-left: 5%;
border:none;
`;

const ChoiceThree = styled.div`
  display: inline;
  position: absolute;
  margin-left: 0%;
  margin-top: 85px;
  width: 130px;
  font-family: Amiko, sans-serif;
  border-bottom: solid 2px;
  border-bottom-color: rgb(190,190,190);

`;

const TextThree = ChoiceThree.withComponent('p')

const NewTextThree = TextThree.extend`
margin-top: -20px;
margin-left: 5%;
border:none;

`;


class Menu extends React.Component{
constructor(props){
  super(props);
  this.state = {

    showNow: true
  }

}




handleButton ()  {
  this.setState({
    showNow: !this.state.showNow
  });

}





render() {
  let show = this.state.showNow ? "none" : "inline"


return (


<MenuBox  onClick = {this.handleButton.bind(this)} >


  <MenuLineOne></MenuLineOne>
  <MenuLineTwo></MenuLineTwo>
  <MenuLineThree></MenuLineThree>







  <Box style = {{display: show}}>


    <ChoiceOne>
      <NewTextOne>Today</NewTextOne>
    </ChoiceOne>


    <ChoiceTwo>

      <NewTextTwo>About</NewTextTwo>

    </ChoiceTwo>

    <ChoiceThree>

      <NewTextThree>Your Stories</NewTextThree>

    </ChoiceThree>


  </Box>

</MenuBox>




    );
  }
}

const textInMenuOne = {
  display: 'inline',
  position: 'absolute',
  marginLeft: '10%'


};

function Options(props){

  return <p style = {textInMenuOne}>{props.option}</p>

}

class MenuBar extends React.Component{

  render(){

    var menuBar = {
      display: 'inline',
      position:'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: 70,
      backgroundColor: 'rgb(235, 235, 235)'
    }

    return(

        <div>
          <div style = {menuBar}>

          </div>
        </div>


    );
  }
}


class Logo extends React.Component{

    render(){

    var logoStyle = {

      display: 'inline',
      position: 'fixed',
      top: -30,
      marginLeft:'45%',
      fontSize: 26,
      fontFamily: 'Amiko, sans-serif',

    }




    return(


      <div>
          <div style = {logoStyle}>
              <Main name = "FYC" />
          </div>
      </div>

    );
  }


}

function Main (props){

  return <h1>{props.name}</h1>;

}

const MainBody = styled.div`
  display: inline;
  position:fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(255,255,255);

`;

const Content = styled.div`
display: inline;
position:fixed;
margin-top:76px;
width: 100%;
height: 100%;
background-color: rgb(255,255,255);


`;



class Mainbody extends React.Component{

  render(){


    return (

      <MainBody>


        <Content></Content>
      </MainBody>

    );
  }
}






export default App;
