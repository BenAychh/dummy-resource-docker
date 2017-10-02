FROM benaychh/random

# install npm cache resource
RUN npm install lawgs --prefix /opt/resource

COPY assets/common.js /opt/resource/common
COPY assets/check.js /opt/resource/check
COPY assets/in.js /opt/resource/in
COPY assets/out.js /opt/resource/out

RUN chmod +x /opt/resource/check /opt/resource/in /opt/resource/out

