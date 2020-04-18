import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type RNViewProps = React.ComponentProps<typeof View>;
type RNKeyboardAvoidingViewProps = React.ComponentProps<
	typeof KeyboardAvoidingView
>;

export type KeyboardAwareContentProps = RNViewProps &
	RNKeyboardAvoidingViewProps;

export const KeyboardAwareContent: React.FC<KeyboardAwareContentProps> = ({
	keyboardVerticalOffset,
	behavior,
	children,
	...rest
}) => {
	return (
		<KeyboardAvoidingView
			behavior={behavior || 'padding'}
			keyboardVerticalOffset={keyboardVerticalOffset || 110}
		>
			<ScrollView>{children}</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default KeyboardAwareContent;
