import ProjectCard from "@/components/ProjectCard"
import RevealContent from "@/components/ReavealContent"
import SectionBadge from "@/components/SectionBadge"

function Projects() {
  return (
    <>
      <RevealContent>
        <>
          <SectionBadge sectionName={""} />
          <h2 className="text-3xl font-extrabold text-center mb-6 md:mb-10">My Projects</h2>
        </>
      </RevealContent>
      <div className="flex flex-col gap-12 lg:gap-20">
        <ProjectCard
          name={"Turtlebot Online Path Planning"}
          description={"Online path planning for a Turtlebot (ground robot) using RRT with smoothing algorithm for collision-free path planning and obstacle avoidance in ROS, Gazebo and RViz."}
          // technologies={["Next JS", "React.JS", "Tailwind CSS", "Framer motion", "Responsive", "Shadcn"]}
          imageSrc={"/images/turtlebot_pp.gif"}
          imagePosition={"left"}
          githubLink={"https://github.com/FatimaYousif/turtlebot_online_path_planning"}
          // directLink={"https://antoinedangleterre.com"}
        />
        <ProjectCard
          name={"SLAM - Differential Drive Mobile Robot "}
          description={"Simultaneous Localization and Mapping(SLAM) algorithms for a differential drive mobile robot with python simulations and plotting."}
          // technologies={["NextJS", "React.JS", "Tailwind CSS", "API", "Responsive", "Github Actions"]}
          imageSrc={"/images/SLAM.gif"}
          imagePosition={"left"}
          githubLink={"https://github.com/FatimaYousif/Feature_EKF_SLAM"}
          // directLink={"https://la-data-verte.vercel.app/"}
        />
        <ProjectCard
          name={"Behaviour trees for pick-place of objects "}
          description={"Used the py_trees library followed by the results tested with turtlebot simulations in RViz with different complex environments having path planning and obstacle avoidance involved."}
          // technologies={["React.JS", "Tailwind CSS", "Responsive"]}
          imageSrc={"/images/BT_stage3.gif"}
          imagePosition={"right"}
          githubLink={"https://github.com/FatimaYousif/pick_up_objects_task/"}
        />
        <ProjectCard
          name={"Mobile Manipulator Task-Priority Kinematic Control "}
          description={"Task-priority redundancy resolution control algorithm for the 6 DOF manipulator with mobile base using python simulations."}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/tp.gif"}
          imagePosition={"left"}
          githubLink={"https://github.com/FatimaYousif/Hands_on_Intervention/tree/main/mobile-manipulator"}
        
          // directLink={"https://kodiz.fr"}
        />
        <ProjectCard
          name={"Pick and Place Application with the Staubli TS60 and TX60 Robot"}
          description={"Worked on industrial manipulators - TS60 and TX60 robots for classification, assembling pieces and performing pick-place tasks on simulation alongside real-robot implementation."}
          // technologies={["React.JS", "Tailwind CSS", "Responsive"]}
          imageSrc={"/images/TSX.png"}
          imagePosition={"right"}
          githubLink={"https://github.com/FatimaYousif/Robot_Manipulation"}
        />
      <ProjectCard
          name={"Palletizing Application with UR3e Collaborative Robot (CoBot)"}
          description={"Worked with the collaborative robot by developing a pick-and-place program for pallets to perform palletizing application by utilizing industrial UR3e Collaborative Robot."}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/cobot.png"}
          imagePosition={"left"}
          // directLink={"https://kodiz.fr"}
          githubLink={"https://github.com/FatimaYousif/Robot_Manipulation/tree/main/The%20UR3e%20Collaborative%20Robot"}
        />
        <ProjectCard
          name={"Stereo Visual Odometry (VO) for Grizzly Robotic Utility Vehicle"}
          description={"Developed VO pipeline from stereo camera calibration, feature extraction, and matching using SURF features and utilizing bucketing strategies and circular matching for accurate apparent motion computation and effective noise/outlier rejection, Structure from motion (2D-to-2D, 3D-to-2D, and 3D-to-3D) for triangulation and refinement using bundle adjustment. The final VO trajectory was also extensively compared with GPS-generated ground truth data."}
          // technologies={["React.JS", "Tailwind CSS", "Responsive"]}
          imageSrc={"/images/SVO.png"}
          imagePosition={"right"}
          githubLink={"https://github.com/FatimaYousif/Multi_View_Geometry/tree/main/stereo_visual_odometry"}
        />
        
        <ProjectCard
          name={"Event Based Cameras (EBC) "}
          description={"Worked on Event-based EBCs examining event data alongside ground truth using Davis using the frame-based approach for encoding raw event-based data into frames compatible with CNNs and RNNs and also applied Motion Compensation."}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/EBC.png"}
          imagePosition={"left"}
          // directLink={"https://kodiz.fr"}
          githubLink={"https://github.com/FatimaYousif/Event_based_Cameras"}
        
        />
      
        <ProjectCard
          name={"Machine Vision Projects "}
          description={"Contributed to projects such as Augmented Reality, Camera Calibration, Detecting Aruco markers, and Generating Fiducial Makers with computer vision, and image processing in C++. "}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/mv.png"}
          imagePosition={"right"}
          // directLink={"https://kodiz.fr"}
          githubLink={"https://github.com/FatimaYousif/Machine_Vision_Projects"}
        
        />

        
        <ProjectCard
          name={" Planning Domain Definition Language(PDDL) "}
          description={"Worked on PDDL modelling (planning domains and problem) as a probabilistic planning language and planning based approach for the container stacking problem. "}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/pddl.png"}
          imagePosition={"left"}
          // directLink={"https://kodiz.fr"}
          githubLink={"https://github.com/FatimaYousif/PDDL_modelling_Hands_On_2"}
        
        />


        <ProjectCard
          name={"Path Planners "}
          description={"Developed 2D path planners including; RRT, RRT* and A star tested on a grid map in python."}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/planners.png"}
          imagePosition={"right"}
          // directLink={"https://kodiz.fr"}
          githubLink={"https://github.com/FatimaYousif/Autonomous_Systems"}
        
        />    

        
        <ProjectCard
          name={"Machine Learning Projects "}
          description={"Developed Projects on machine learning topics such as logistic regression, decision trees, gradient descent for linear regression, support vector machines (SVM), fully connected networks (FCN), and convolutional neural networks (CNN)."}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/ml.png"}
          imagePosition={"right"}
          // directLink={"https://kodiz.fr"}
          githubLink={"https://github.com/FatimaYousif/Machine_Learning_Projects"}
        
        />    

        
        <ProjectCard
          name={"Reinforcement Learning-Based Path Planning for Autonomous Robots in Static Environments "}
          description={"Implemented the Q-learning algorithm on a point (omnidirectional) robot for path planning and navigation purposes."}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/qlearning.gif"}
          imagePosition={"right"}
          // directLink={"https://kodiz.fr"}
          githubLink={"https://github.com/FatimaYousif/Autonomous_Systems/blob/main/QLearning.ipynb"}
        
        />    


        <ProjectCard
          name={"Image Captioning Deep Learning Model "}
          description={"Developed this Final Year Project by using cutting-edge including Deep Learning, Computer Vision, and data mining technologies including Keras libraries with Flask in the backend and AWS."}
          // technologies={["Blog", "SEO", "Marketing", "Webdesign", "UX/UI", "WordPress", "Maintenance"]}
          imageSrc={"/images/imgcap.gif"}
          imagePosition={"left"}
          // directLink={"https://kodiz.fr"}
          githubLink={"https://github.com/FatimaYousif/Image-Captioning-Deep-Learning-Model"}
        
        />    



      </div>
    </>
  )
}

export default Projects