import React from 'react'

const Contact = () => {
    return (
        <div>
            <section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider my-4" />
                        <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>+1 (623) 628-7861</div>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                        <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a class="d-block" href="mailto:JAlexArroyo@gmail.com">JAlexArroyo@gmail.com</a>
                    </div>
                    
                </div>
                <div class="row myRow">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i class="fab fa-github fa-3x mb-3 text-muted"  aria-hidden="true"></i>
                        <a class="d-block" href="https://github.com/JAA459">Github</a>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                        <i class="fab fa-linkedin-in fa-3x mb-3 text-muted"></i>
                        <a class="d-block" href="https://www.linkedin.com/in/joshua-arroyo-36b8201b9/">LinkedIn</a>
                    </div>
                    
                </div>
            </div>
        </section>
        </div>
    )
}

export default Contact
