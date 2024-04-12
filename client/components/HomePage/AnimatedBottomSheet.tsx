import React, { Fragment, ReactNode, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
    FadeIn,
    FadeOut,
    runOnJS,
    SlideInDown,
    SlideOutDown,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import BottomSheetContext from "../../contexts/BottomSheetContext";

type AnimatedBottomSheetProps = {
    isOpen: boolean;
    backdropOnPress: () => void;
    children: ReactNode;
};

const PressAnimated = Animated.createAnimatedComponent(Pressable);
const HEIGHT = 500;
const CLAMP = 20;

const AnimatedBottomSheet = (props: AnimatedBottomSheetProps) => {
    const offset = useSharedValue(0);
    const panGesture = Gesture.Pan()
        .onChange((event) => {
            const offsetDelta = event.changeY + offset.value;
            const clamp = Math.max(-CLAMP, offsetDelta);
            offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
        })
        .onFinalize(() => {
            if (offset.value < HEIGHT / 3) {
                offset.value = withSpring(0);
            } else {
                offset.value = withTiming(HEIGHT, {}, () => {
                    runOnJS(props.backdropOnPress)();
                });
            }
        });

    const translateY = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: offset.value,
                },
            ],
        };
    }, []);

    useEffect(() => {
        function onOpen() {
            if (props.isOpen) {
                offset.value = 0;
            }
        }

        onOpen();
        console.log("isOpen", props.isOpen);
    }, [props.isOpen]);

    if (!props.isOpen) {
        return <Fragment />;
    }

    return (
        <>
            <PressAnimated
                onPress={props.backdropOnPress}
                entering={FadeIn}
                exiting={FadeOut}
                style={styles.backdrop}
            />
            <GestureDetector gesture={panGesture}>
                <Animated.View
                    entering={SlideInDown.springify().damping(15)}
                    exiting={SlideOutDown}
                    style={[styles.view, translateY]}
                >
                    {props.children}
                </Animated.View>
            </GestureDetector>
        </>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.45)",
        zIndex: 1,
    },
    view: {
        backgroundColor: "white",
        height: HEIGHT,
        width: "100%",
        position: "absolute",
        bottom: -CLAMP * 1.1,
        zIndex: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});

export default AnimatedBottomSheet;
