import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SubscriptionDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View>
            <Text>Subscription Detail: {id}</Text>
            <Link href="/" className="mt-4 rounded bg-primary text-white p-4">
                Go Back</Link>
        </View>
    );
}