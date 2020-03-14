export const setInput = set => event => {
	const { target, nativeEvent } = event;
	if (target != null) {
		const { text } = nativeEvent;
		set(text);
	}
};
