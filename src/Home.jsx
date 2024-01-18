

import SearchBox from "./components/SearchBox";
import Subcard from "./components/Subcard";
import Articlecard from "./components/Articlecard";
import { useState } from "react";

const Home = () => {
    //useEffect and make call to the backend to get some data back to display articles
    //fake some data
    let [info, setInfo] = useState([
        { 
            "id": 874535.0660425331,
            "date": "2024-01-18T18:03:33.064Z",
            "publishStatus": false,
            "inSaveDraft": false,
            "title": "Embracing the Inherent Goodness: A Celebration of Human Nature",
            "section": "left",
            "categories": [
              {
                "title": "HTML",
                "active": true
              },
              {
                "title": "CSS",
                "active": true
              },
              {
                "title": "JS",
                "active": false
              },
              {
                "title": "ReactJS",
                "active": false
              },
              {
                "title": "NodeJS",
                "active": false
              }
            ],
            "content": [
              {
                "id": 209768,
                "text": "In a world often clouded by negativity and discord, it becomes essential to take a moment to appreciate the inherent goodness that resides within every human being. Despite the challenges and complexities we face, there is a profound beauty in the kindness, empathy, and compassion that define our nature. This blog aims to explore and celebrate the goodness of human nature, delving into its roots and showcasing the positive impact it can have on individuals and society as a whole.",
                "type": "paragraph"
              },
              {
                "id": 882222,
                "text": "Human beings are wired for connection and empathy. Our ability to understand and share the feelings of others is a testament to the innate kindness that exists within us. From simple acts of courtesy to more profound expressions of compassion, kindness forms the foundation of our interactions. Whether it's helping a stranger in need or offering a supportive shoulder to a friend, these acts of kindness create a ripple effect that contributes to the overall well-being of our communities.",
                "type": "paragraph"
              },
              {
                "id": 455923,
                "text": "Empathy, the ability to understand and share the feelings of others, is a powerful force that fuels positive human interactions. It enables us to connect on a deeper level, fostering understanding and unity. By putting ourselves in someone else's shoes, we break down barriers and build bridges of compassion. This emotional intelligence is a cornerstone of our shared humanity, leading to a more harmonious coexistence.",
                "type": "paragraph"
              },
              {
                "id": 8956,
                "text": "https://i.imgur.com/c9vMGaT.jpg",
                "type": "image"
              },
              {
                "id": 693102,
                "text": "One of the remarkable aspects of human goodness is its ability to create a ripple effect. A single act of kindness can set off a chain reaction, inspiring others to follow suit. Whether it's paying forward a kind gesture or initiating a community project, the impact of these positive deeds extends far beyond the initial act. This ripple effect has the potential to transform entire communities, fostering a culture of goodwill and cooperation.",
                "type": "paragraph"
              },
              {
                "id": 632291,
                "text": "The goodness of human nature is perhaps most evident in our resilience in the face of adversity. When confronted with challenges, individuals often come together to support one another. Whether it's a natural disaster, a global pandemic, or personal hardships, the collective resilience of humanity shines through. This shared strength is a testament to the inherent goodness that emerges in times of need.",
                "type": "paragraph"
              },
              {
                "id": 47332,
                "text": "https://images.inc.com/uploaded_files/image/1920x1080/evan-kirby-101570_199211.jpg",
                "type": "image"
              },
              {
                "id": 781093,
                "text": "Our capacity for goodness extends to embracing diversity and promoting inclusivity. Recognizing and celebrating the unique qualities of individuals from various backgrounds fosters a rich tapestry of experiences and perspectives. By appreciating the differences that make each person unique, we create a society that values equality and understanding.",
                "type": "paragraph"
              },
              {
                "id": 283060,
                "text": "In the tapestry of human existence, the threads of goodness weave a narrative of compassion, empathy, and resilience. It is crucial to recognize and celebrate these inherent qualities that define our nature. By embracing our capacity for kindness, understanding, and cooperation, we contribute to a world that thrives on the positive impact of human goodness. Let us continue to cultivate these qualities and strive for a future where the goodness within each of us becomes a guiding light for generations to come.",
                "type": "paragraph"
              }
            ]
        },
        { 
            "id": 874535.0660425331,
            "date": "2024-01-18T18:03:33.064Z",
            "publishStatus": false,
            "inSaveDraft": false,
            "title": "Embracing the Inherent Goodness: A Celebration of Human Nature",
            "section": "mid",
            "categories": [
              {
                "title": "HTML",
                "active": false
              },
              {
                "title": "CSS",
                "active": false
              },
              {
                "title": "JS",
                "active": true
              },
              {
                "title": "ReactJS",
                "active": false
              },
              {
                "title": "NodeJS",
                "active": false
              }
            ],
            "content": [
              {
                "id": 209768,
                "text": "In a world often clouded by negativity and discord, it becomes essential to take a moment to appreciate the inherent goodness that resides within every human being. Despite the challenges and complexities we face, there is a profound beauty in the kindness, empathy, and compassion that define our nature. This blog aims to explore and celebrate the goodness of human nature, delving into its roots and showcasing the positive impact it can have on individuals and society as a whole.",
                "type": "paragraph"
              },
              {
                "id": 882222,
                "text": "Human beings are wired for connection and empathy. Our ability to understand and share the feelings of others is a testament to the innate kindness that exists within us. From simple acts of courtesy to more profound expressions of compassion, kindness forms the foundation of our interactions. Whether it's helping a stranger in need or offering a supportive shoulder to a friend, these acts of kindness create a ripple effect that contributes to the overall well-being of our communities.",
                "type": "paragraph"
              },
              {
                "id": 455923,
                "text": "Empathy, the ability to understand and share the feelings of others, is a powerful force that fuels positive human interactions. It enables us to connect on a deeper level, fostering understanding and unity. By putting ourselves in someone else's shoes, we break down barriers and build bridges of compassion. This emotional intelligence is a cornerstone of our shared humanity, leading to a more harmonious coexistence.",
                "type": "paragraph"
              },
              {
                "id": 8956,
                "text": "https://i.imgur.com/c9vMGaT.jpg",
                "type": "image"
              },
              {
                "id": 693102,
                "text": "One of the remarkable aspects of human goodness is its ability to create a ripple effect. A single act of kindness can set off a chain reaction, inspiring others to follow suit. Whether it's paying forward a kind gesture or initiating a community project, the impact of these positive deeds extends far beyond the initial act. This ripple effect has the potential to transform entire communities, fostering a culture of goodwill and cooperation.",
                "type": "paragraph"
              },
              {
                "id": 632291,
                "text": "The goodness of human nature is perhaps most evident in our resilience in the face of adversity. When confronted with challenges, individuals often come together to support one another. Whether it's a natural disaster, a global pandemic, or personal hardships, the collective resilience of humanity shines through. This shared strength is a testament to the inherent goodness that emerges in times of need.",
                "type": "paragraph"
              },
              {
                "id": 47332,
                "text": "https://images.inc.com/uploaded_files/image/1920x1080/evan-kirby-101570_199211.jpg",
                "type": "image"
              },
              {
                "id": 781093,
                "text": "Our capacity for goodness extends to embracing diversity and promoting inclusivity. Recognizing and celebrating the unique qualities of individuals from various backgrounds fosters a rich tapestry of experiences and perspectives. By appreciating the differences that make each person unique, we create a society that values equality and understanding.",
                "type": "paragraph"
              },
              {
                "id": 283060,
                "text": "In the tapestry of human existence, the threads of goodness weave a narrative of compassion, empathy, and resilience. It is crucial to recognize and celebrate these inherent qualities that define our nature. By embracing our capacity for kindness, understanding, and cooperation, we contribute to a world that thrives on the positive impact of human goodness. Let us continue to cultivate these qualities and strive for a future where the goodness within each of us becomes a guiding light for generations to come.",
                "type": "paragraph"
              }
            ]
        },
        { 
            "id": 874535.0660425331,
            "date": "2024-01-18T18:03:33.064Z",
            "publishStatus": false,
            "inSaveDraft": false,
            "title": "Embracing the Inherent Goodness: A Celebration of Human Nature",
            "section": "right",
            "categories": [
              {
                "title": "HTML",
                "active": false
              },
              {
                "title": "CSS",
                "active": false
              },
              {
                "title": "JS",
                "active": false
              },
              {
                "title": "ReactJS",
                "active": false
              },
              {
                "title": "all",
                "active": true
              },
              {
                "title": "NodeJS",
                "active": false
              }
            ],
            "content": [
              {
                "id": 209768,
                "text": "In a world often clouded by negativity and discord, it becomes essential to take a moment to appreciate the inherent goodness that resides within every human being. Despite the challenges and complexities we face, there is a profound beauty in the kindness, empathy, and compassion that define our nature. This blog aims to explore and celebrate the goodness of human nature, delving into its roots and showcasing the positive impact it can have on individuals and society as a whole.",
                "type": "paragraph"
              },
              {
                "id": 882222,
                "text": "Human beings are wired for connection and empathy. Our ability to understand and share the feelings of others is a testament to the innate kindness that exists within us. From simple acts of courtesy to more profound expressions of compassion, kindness forms the foundation of our interactions. Whether it's helping a stranger in need or offering a supportive shoulder to a friend, these acts of kindness create a ripple effect that contributes to the overall well-being of our communities.",
                "type": "paragraph"
              },
              {
                "id": 455923,
                "text": "Empathy, the ability to understand and share the feelings of others, is a powerful force that fuels positive human interactions. It enables us to connect on a deeper level, fostering understanding and unity. By putting ourselves in someone else's shoes, we break down barriers and build bridges of compassion. This emotional intelligence is a cornerstone of our shared humanity, leading to a more harmonious coexistence.",
                "type": "paragraph"
              },
              {
                "id": 8956,
                "text": "https://i.imgur.com/c9vMGaT.jpg",
                "type": "image"
              },
              {
                "id": 693102,
                "text": "One of the remarkable aspects of human goodness is its ability to create a ripple effect. A single act of kindness can set off a chain reaction, inspiring others to follow suit. Whether it's paying forward a kind gesture or initiating a community project, the impact of these positive deeds extends far beyond the initial act. This ripple effect has the potential to transform entire communities, fostering a culture of goodwill and cooperation.",
                "type": "paragraph"
              },
              {
                "id": 632291,
                "text": "The goodness of human nature is perhaps most evident in our resilience in the face of adversity. When confronted with challenges, individuals often come together to support one another. Whether it's a natural disaster, a global pandemic, or personal hardships, the collective resilience of humanity shines through. This shared strength is a testament to the inherent goodness that emerges in times of need.",
                "type": "paragraph"
              },
              {
                "id": 47332,
                "text": "https://images.inc.com/uploaded_files/image/1920x1080/evan-kirby-101570_199211.jpg",
                "type": "image"
              },
              {
                "id": 781093,
                "text": "Our capacity for goodness extends to embracing diversity and promoting inclusivity. Recognizing and celebrating the unique qualities of individuals from various backgrounds fosters a rich tapestry of experiences and perspectives. By appreciating the differences that make each person unique, we create a society that values equality and understanding.",
                "type": "paragraph"
              },
              {
                "id": 283060,
                "text": "In the tapestry of human existence, the threads of goodness weave a narrative of compassion, empathy, and resilience. It is crucial to recognize and celebrate these inherent qualities that define our nature. By embracing our capacity for kindness, understanding, and cooperation, we contribute to a world that thrives on the positive impact of human goodness. Let us continue to cultivate these qualities and strive for a future where the goodness within each of us becomes a guiding light for generations to come.",
                "type": "paragraph"
              }
            ]
        }
    ])

    return(
        <div className="home">
            <SearchBox />
            <div className="home_title">
                MY THOUGHTS
            </div>
            <div className="home_subcardWrapper">
                <Subcard text="CSS" />
                <Subcard text="HTML" />
                <Subcard text="JS" />
                <Subcard text="Node.js" />
                <Subcard text="React" />
            </div>
            <div className="home_articles">
               
                <div className="home_articles_left">
                    {
                        info.map((v, i) => 

                        v.section == "left" ? 

                        <Articlecard key={i} text={v.title} /> :  ""
                       
                        )
                    }
                </div>
            
                <div className="home_articles_mid">
                    {
                        info.map((v, i) => 
                        v.section == "mid" ? 
                        
                        <Articlecard key={i} text={v.title} /> :  ""
                       
                        )
                       
                    }
                 
                </div>
                <div className="home_articles_right">
                {
                        info.map((v, i) => 
                        v.section == "right" ? 
                        
                        <Articlecard key={i} text={v.title} /> :  ""
                       
                        )
                        
                    }
                </div>

            </div>

            <div className="home_ender">
                <div className="home_ender_square">

                </div>
                <div className="home_ender_diamond">

                </div>
                <div className="home_ender_circle">

                </div>
            </div>
        </div>
    )
}

export default Home;