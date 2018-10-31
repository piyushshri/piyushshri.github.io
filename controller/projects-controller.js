appModule.controller("ProjectsController", function($scope){
    $scope.projects = [
        {
            id: 1,
            title: "Business Process Modeling and Deployment Framework",
            tech: "Java, AngularJS, Spring, MySQL",
            description: `<ul>
            <li>Responsible for managing the full software stack - AngularJS, Spring and MySQL</li>
            <li>Literature study, design and implementation of dynamic Business Process Model (BPM) designing web application adhering to the BPMN 2.0 standard using Activiti BPMN engine</li>
            <li>Enabled configurable connections to remote machines to run business process models remotely</li>
            <li>Worked on implementing custom activities to run programs (R, Python, Shell) within the business process models. Wrote behaviour classes, XML definitions and integration models for these activities</li>
            <li>Implemented file system workspace which enabled activities to use resources and scripts files stored both locally and remotely. Implemented the required features for workspace such as web sockets, queues, FTP pipelines etc</li>
            <li>Implemented versioning of workspace files using git</li>
            <li>Implemented validation of BPMN elements and thus reducing the chances of human errors while modeling.</li>
            <li>This helped the users save time as the bugs in their BP models could be pointed out at design phase rather than deployment phase</li>
            </ul>`
        },{
            id:2,
            title:"Human Motion Tracking at Scale",
            tech:"AngularJS, Python, Java, HTML5, Tensorflow, Dask, PostgreSQL, Redis, RabbitMQ",
            description:`<ul>
                Full stack developer in Mu Sigma's scalable deep learning based human detection and tracking platform<br>
                Responsible for:
                <ul>
                    <li>Design and implementation of cloud friendly and scalable architecture of this platform</li>
                    <li>Optimizing the user experience by design and implementation of user friendly interface</li>
                    <li>Back end development, implementation of ML algorithms for computation</li>
                    <li>Implementing business process flows using BPMN platform</li>
                    <li>Build process and deployment automation</li>
                </ul>
                Contributed in:
                <ul>
                    <li>Reducing the overall time taken for training human detection model (End to End People Detection in</li>
                    <li>Crowded Scenes - ReInspect) using distributed computing features of Tensorflow</li>
                    <li>Enabling the code to utilize multiple CPU cores and graphic processors for parallel processing</li>
                    <li>Distributing Multi Hypothesis Tracking (MHT) python code processing over multiple machines using</li>
                    <li>Dask Distributed to enable real time human motion tracking</li>
                    <li>Implementation of MHT – Revisited algorithm in Python</li>
                </ul>
            </ul>`
        }, {
            id:3,
            title:"Real Time Algorithmic Trading Engine",
            tech:"Scala, Java, Python, R, Apache Flink, HTML5, PostgreSQL",
            description:`<ul>
                <li>Design and development of real time algorithmic trading engine which can use mathematical algorithms to place a trade order on the New York Stock Exchange</li>
                <li>Development of a user interface to manage and visualize ticker data and the analysis. Design and development of a back end to support the architecture of this UI</li>
                <li>Implementation of convergent cross mapping (CCM) algorithm to detect causality and the relationship between pairs co-integrated of tickers. Prediction of stock prices with linear modeling on causal pairs of stocks</li>
                <li>Implementation of Recurrence Quantification Analysis over ticker data to determine recurring behavior of stock prices and to place trade orders accordingly</li>
                <li>Research on determining change points in stock prices over time using R packages. Implementation of dummy variable regression method to determine change points</li>
            </ul>`
        }, {
            id:4,
            title:"Collaborative Development Platform (CoDevelop)",
            tech:"HTML5, PHP, MySQL",
            description:`CoDevelop is a SaaS based project developed on HTML5, PHP and MySQL which gives the facility of real time collaboration to software developers. Developers can collaborate over a project on the cloud and work on it as if they are working together.
            <ul>
                <li>Did full stack development for the project</li>
                <li>Designed and developed the user interface using bootstrap framework</li>
                <li>Developed back end operations of MySQL database</li>
                <li>Developed the server side application using PHP in an MVC based approach</li>
            </ul>`
        }, {
            id:5,
            title:"Vehicle Sharing Android Application (VehShare)",
            tech:"Android SDK, PHP, MySQL",
            description:`An Android application which helps the users to find people to travel with, and thus helping them to share the fuel and meet new people. Users can register journeys or find other registered journeys and then contact each other to plan a journey together.
            <ul>
                <li>Designed the user interface for the app</li>
                <li>Did front and development using the Android SDK and Java2SE</li>
                <li>Developed web interfaces for interaction of the app with remote database (JSON parsing)</li>
                <li>Designed the back end architecture of the app and implemented on MySQL database</li>
            </ul>`
        }
    ]
});