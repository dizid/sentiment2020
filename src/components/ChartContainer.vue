<template>
   <div><h3>This component gets the Firestore data</h3>
       <p> avgScores.avgPdHappy:  {{ avgScores.avgPdHappy }}</p>
      <p> calculateAvgScores:  {{ calculateAvgScores }}</p> 
      <p> calculateAvgScores[0]:  {{ calculateAvgScores[0] }}</p> 
      <p> number_of_tweets:  {{ number_of_tweets }}</p> 
 <chart :chart-data="datacollection"></chart>

 </div>
</template>
<script>
import { db } from '../main.js' 
import Chart from "./Chart.js"

export default {
    components: {
        Chart
      },

   data: () => ({ 
   tweetdata: [],  // These come from Firestore
   twitter_screen_name: 'webRat', // TODO this should come from the form
   number_of_tweets: '',
 avgScores: {avgPdHappy:'',avgPdSad:'',avgPdAngry:'',avgPdFear:'',avgPdExcited:'',avgPdBored:'' },
   emotionScores: [],
   datacollection: null,
   labelHappy: 'Happy',
   test: ["22","33","44",55,66,33]
 }),

 firestore() {
    return {
    tweetdata: db.collection('tweets').where('screen_name', '==', this.twitter_screen_name),
    }
  }, 

computed: {
calculateAvgScores() {
   
   // maak een integer van de uitkomst: maak een nieuwe array van alle waardes van pdHappy: 
   // tel deze waardes op en deel door het totale aantal waardes: maal 100 en verwijder decimalen
      this.avgScores.avgPdHappy =  parseInt((this.tweetdata.map(tweetdata => tweetdata.pdHappy ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2))
       this.avgScores.avgPdSad = parseInt((this.tweetdata.map(tweetdata => tweetdata.pdSad ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2))
      this.avgScores.avgPdAngry = parseInt((this.tweetdata.map(tweetdata => tweetdata.pdAngry ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2))
      this.avgScores.avgPdFear = parseInt((this.tweetdata.map(tweetdata => tweetdata.pdFear ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2))
      this.avgScores.avgPdExcited = parseInt((this.tweetdata.map(tweetdata => tweetdata.pdExcited ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2))
      this.avgScores.avgPdBored = parseInt((this.tweetdata.map(tweetdata => tweetdata.pdBored ).
         reduce((total, amount) => total + amount,0)/ +this.tweetdata.length * 100).toPrecision(2))
      this.number_of_tweets = this.tweetdata.length 
this.emotionScores = Object.values(this.avgScores) 
// console.log(this.emotionScores)
    return this.emotionScores
      }
}, // end computed

 mounted() {this.fillData()},
methods: {
   fillData() {
   this.datacollection = {
          labels: [this.labelHappy,"Sad","Angry","Feared","Excited","Bored"],
            datasets: [
              {
                label: this.twitter_screen_name,
                backgroundColor: "#f87979",
                data: [this.test]
              },
              {
                label: "2nd twitteruser",
                backgroundColor: "#A5CC82",
                data: [48, this.number_of_tweets,  this.getRandomInt(),
                 this.getRandomInt(), 50, 50]
              }
            ]
          };
        },
        getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
      }
       
}
</script>