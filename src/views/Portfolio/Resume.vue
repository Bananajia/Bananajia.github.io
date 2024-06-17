<template>
    <div class="resume">
        <div class="title-wok">
            WORK EXPERIENCE
        </div>
        <div class="workexperience">
            <SkillCard :name="'Full Stack Developer'" :dscp="'Picadon is developing a fintech tool for investing rentals in impact investment. Based on the Invision prototype and user stories, I now divide them into tech tasks, and design system architecture then develops them.'" :location="'Copenhagen'" :time="'2021.03 - Ongoing'" :company="'Picadon'" :tech="'Flask, RESTFul API, Vue, Scrum'"/>

            <SkillCard :name="'IT Project Manager'" :dscp="'Me and my friend came up with an idea: Can we order foods without waiters? It is corona-free. Customers can scan the QR code,  order their food, and pay. Then we start to build the MVP. Since we will open to multiple shops to use, we choose ABP Vnext to build the multi-tenant web application.'" :location="'Copenhagen'" :time="'2021.01 - Ongoing'" :company="'Jyh Aps'" :tech="'C\#,  ASP.NET, EF core, VUE, Azure Cloud'"/>
            
            <SkillCard :name="'Backend Developer'" :dscp="'My friend opened a restuarant, I worked with a front-end developer and a UI designer, establishing a restaurant website for her. I used PHP with mySQL processing booking table requests and sending messages to the customers through emails, which is deployed the pages on AWS server.'" :location="'Copenhagen'" :time="'June 2020 - Aug 2020'" :company="'YoTuStudio'" :tech="'AWS, mySQL, PHP, HTML'"/>
            

            <SkillCard :name="'Computer Vision Engineer'" :dscp="'Jian24 checkout-free convenience store is an AmazonGo-Like checkout-free supermarket. My responsibility is to apply algorithms to recognize items. I create a deep learning model to recognize the commodities using Pytorch and collect data and test results by using python.'" :location="'Shanghai'" :time="'August 2018 - December 2017'" :company="'Jian24'" :tech="'Python, C, Machine Learning, Deep Learning'"/>

            <SkillCard :name="'Algrithm Engineer'" :dscp="'Beijing IMPOWER is a technology company that provides intelligent video analysis, algorithms and devices. We used the camera to do a lot of face-related algorithms. We deployed it both on arm-based chips and our own servers.'" :location="'Shanghai'" :time="'July 2016 - December 2017'" :company="'Beijing IMPOWER'" :tech="'Python, Pytorch, Tests, Deep Learning'"/>
        </div>
        
         <div class="title-wok">
            PROJECTS
        </div>
        <div class="workexperience">
            <SkillCard :name="'Game Programmer'" :dscp="'We build a mobile game called Primal Arena. In this project, I was mainly responsiable for a new tech called motion matching to automatically control the character rather than the traditional state machine in Unity.'" :location="'Copenhagen'" :time="'September 2019 -- January 2020'" :company="'DADIU'" :tech="'data-driven model, Unity, C\#'"/>
            
            <SkillCard :name="'Master Thesis'" :dscp="'The topic is to do a monitor to detect violations among events on a distributed platform Orleans. Our project could generate an effective monitor for the system by given a Dynamic Condition Response graph. '" :location="'Copenhagen'" :time="'September 2019 -- January 2020'" :company="'University of Copenhagen'" :tech="' C\#, Orleans, distributed platform'"/>
        </div>

        <div class="title-wok">
            EDUCATION
        </div>
        <div class="workexperience" id="edu">
            <div class="education">
                <div class="school">
                    University of Copenhagen
                </div>
                <div class="course">
                    Main Courses: Advanced Computer System, Advanced Programming, Advanced Algorithm and Data Structures, Machine Learning, Random Algorithm    
                </div>
                <div class="time">
                    GPA: 10.5/12
                </div>
                <div class="time">
                    September 2018 -- October 2020
                </div>
            </div>
            

            <div class="education">
                <div class="school">
                    Halmstad University
                </div>
                <div class="course">
                    Main Courses: Artificial Intelligence, Algorithm and Data Structures, Algorithm
                </div>
                <div class="time">
                    September 2015 -- February 2016
                </div>
            </div>


            <div class="education">
                <div class="school">
                    XIDIAN University
                </div>
                <div class="course">
                    Main Courses: Linear algebra, Calculus, Probability theory
                </div>
                <div class="time">
                    GPA: 3.2/4.0
                </div>
                <div class="time">
                    September 2012 -- July 2016
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SkillCard from "../../components/SkillCard.vue"
export default {
    name: "Resume",
    components:{
        SkillCard
    }
}
</script>

<style scoped>
.resume{
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
}
.title-wok{
    margin: 70px 0 10px 70px;
    font-size:30px;
    font-weight: 900;
    letter-spacing: 3px;
}

.workexperience{
    display:flex;
    flex-wrap: wrap;
    /* justify-content:center; */

    margin-left: 50px;
}

.education{
    padding: 20px;
    width: 350px;
    height: 110px;
    /* box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2); */
}

.education .school{
    font-weight: bold;
    margin-bottom: 20px;
}

.education .course{
    font-size: 12px;
    line-height:18px;
    margin-bottom: 5px;
}

.education .time{
    bottom:20px;
    font-weight:100;
    font-size:12px;
}

.education:hover{
    box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
}

#edu{
    margin-bottom: 50px;
}
</style>
