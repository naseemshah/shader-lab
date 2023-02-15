#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleShape(vec2 position,float radius){
    return step(radius,length(position-vec2(.5)));
}

void main(){
    vec2 position=gl_FragCoord.xy/u_resolution;
    vec3 color=vec3(1,.4,1);
    
    float circle=circleShape(position,.3);
    color=vec3(circle);
    gl_FragColor=vec4(color,1);
}