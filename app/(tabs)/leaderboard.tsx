import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Dummy data for testing
const dummyData = [
  { id: '1', name: 'Alex', rating: 9.5 },
  { id: '2', name: 'Sarah', rating: 9.2 },
  { id: '3', name: 'Mike', rating: 8.8 },
  { id: '4', name: 'Emma', rating: 8.5 },
  { id: '5', name: 'John', rating: 8.2 },
];

export default function LeaderboardScreen() {
  const [ratings] = useState(dummyData);

  const renderRatingItem = ({ item }) => (
    <View style={styles.ratingItem}>
      <ThemedText style={styles.name}>{item.name}</ThemedText>
      <ThemedText style={styles.rating}>{item.rating.toFixed(1)}</ThemedText>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Leaderboard</ThemedText>
      <FlatList
        data={ratings}
        renderItem={renderRatingItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 32,
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20,
  },
  ratingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#111',
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: '#fff',
  },
  rating: {
    fontSize: 24,
    color: '#A1CEDC',
    fontWeight: 'bold',
  },
}); 