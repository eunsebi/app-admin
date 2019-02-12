import app.admin.CustomUserDetailService
import groovy.app.admin.encoding.OldPasswordEncoder
import groovy.app.admin.listeners.CustomSecurityEventListener

// Place your Spring DSL code here
beans = {
    userDetailsService(CustomUserDetailService)
    securityEventListener(CustomSecurityEventListener)
    //passwordEncoder(OldPasswordEncoder)
}
