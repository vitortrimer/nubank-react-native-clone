import React from "react";
import { Animated } from "react-native";
import { PanGestureHandler } from 'react-native-gesture-handler';

import Icon from "react-native-vector-icons/MaterialIcons";

import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Menu from "../components/Menu";
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation  } from "./styles";

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      },
      {
        useNativeDriver: true
      }
    ]
  );

  function onHandlerStateChange(event) {
    
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY
            }]
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 1.196.353,43</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 12,32 recebida de Ronaldo Trimer
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs />
    </Container>
  );
}
