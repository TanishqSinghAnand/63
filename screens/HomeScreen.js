import * as React from 'react';
import { StyleSheet, Text, View , TextInput ,TouchableOpacity } from 'react-native';
import dictionary  from "../database";


export default class HomeScreen extends React.Component{

    constructor(){
        super();
        this.state={
            text: "" ,
            isSearchPressed:false,
            lexialCategory:"",
            defination:'',
            word:"",
            lexialCategories : '',
        }
    }


        /*var url = await "https://whitehat-dictionary.glich.me/?word=" + word;
        return fetch(url)
        .then((data)=>{
            return data.json()
        })
        .then((response)=>{
            var responseObject = JSON.parse(response);
            var word = responseObject.word;
            var lexialCategory = responseObject.results[0].lexialEntries[0].lexialCategory.text;
            var defination = responseObject.results[0].lexialEntries[0].entries[0].senses[0].defination[0]

            this.setState({
                "word":word.trim(),
                "lexialCategories":lexialCategory === undefined ? "" : lexialCategory.trim() ,
                "defination":defination === undefined ? "" : defination.trim()
            })
        })*/

        getWord=(word)=>{


            var url =  "https://whitehat-dictionary.glich.me/?word=" + word;
            return fetch(url)
            .then((data)=>{
                return data.json()
            })
            .then((response)=>{
                var responseObject = JSON.parse(response);
                var word = responseObject.word;
                var lexialCategory = responseObject.results[0].lexialEntries[0].lexialCategory.text;
                var defination = responseObject.results[0].lexialEntries[0].entries[0].senses[0].defination[0]
    
                this.setState({
                    "word":word.trim(),
                    "lexialCategories":lexialCategory === undefined ? "" : lexialCategory.trim() ,
                    "defination":defination === undefined ? "" : defination.trim()
                })
            })

    }

    render(){
        return(
            <View style={{backgroundColor:"yellow"}}>
                <TextInput
                style={styles.inpu}
                onChangeText={text=>{
                    this.setState({
                        text:text,
                        isSearchPressed:false,
                        word:"",
                        lexialCategory:'',
                        defination:""
                    });
                }}
                ></TextInput>
                <TouchableOpacity style={styles.to}
                    onPress={this.getWord}
                ><Text>Search</Text></TouchableOpacity>

                <View>
                    <Text>
                        Word :{""}
                    </Text>
                    <Text>
                        {this.state.word}
                    </Text>
                </View>
                <View>
                    <Text>
                        Type : {""}
                    </Text>
                    <Text>
                        {this.state.lexialCategory}
                    </Text>
                </View>

                <View>
                    <Text>
                        Defination : {""}
                    </Text>
                    <Text>
                        {this.state.defination}
                    </Text>
                </View>


            </View>
        )
    }


}

const styles = StyleSheet.create({
    inpu: {
      flex: 1,
      border:"solid",
      borderColor:"black",
      backgroundColor:"blue",
      alignItems: 'center',
      justifyContent: 'center',
      width:200,
      height:40,
      marginLeft:30,
      marginTop:20,
    },
    to:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"red",
        width:90,
        borderRadius:29,
        marginLeft:80,
        marginTop:20,
        marginBottom: 33,

    }
  });
  