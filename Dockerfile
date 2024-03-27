FROM traccar/traccar:latest

VOLUME /opt/traccar/data
VOLUME /opt/traccar/conf

EXPOSE 8082
EXPOSE 5000-5150

ENTRYPOINT ["java", "-Xms1g", "-Xmx1g", "-Djava.net.preferIPv4Stack=true"]

CMD ["-jar", "tracker-server.jar", "conf/traccar.xml"]
