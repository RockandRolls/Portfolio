const About = () => {
    return (
      <div className="flex gap-x-6 p-32">
        <div className="w-3/12">
            <img src="./RIphoto.jpg" alt="my pic" />
            <div className="flex">
              <img className="h-7 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvn02Fzoa-K9jHv2kJrTnjkurQaiQydba_7g&usqp=CAU" alt="linkedin link icon " /> 
              <img className="h-7 w-7" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="git hub link icon" /> 
              <img className="h-7 w-6"  src="https://www.svgrepo.com/show/295341/envelope-email.svg" alt="email link icon" /> 
            </div>
        </div>
        <div class="vl" className="border-neutral-950 border "></div>
        <div>
          <h1 className="text-3xl"> Hi!</h1>   
          <h1>I'm Rohini,</h1>
          <h2>Junior Frontend Developer.</h2> 
          <br />
          <p>I am a career changer who went from Biology and jumped right into the innovative field of web development. Web and specifically Frontend Development, caught my interest because I can use my detail-oriented tendencies in a creative and result-driven way. </p>
          <br />
          <p>Am passionate about creating unique user interfaces and developing solutions that aim for a greater user experience. Baing confronted with new challenges, the wide range of knowledge and technologies, as well as being surrounded by the lively tech community, motivates and inspires me. </p>   
        </div>
      </div>
      
    )
  }
  
  export default About 