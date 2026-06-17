import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navs';
import React from 'react';
import { colors } from '../theme/colors';

type props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailRow = ({ label, value }: { label: string; value: string | number }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const DetailsScreen = ({ route }: props) => {
  const listItem = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{listItem.university}</Text>
          <View style={styles.rankingBadge}>
            <Text style={styles.rankingLabel}>World Rank</Text>
            <Text style={styles.rankingValue}>#{listItem.worldRanking}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <DetailRow label="Country" value={listItem.country} />
        <DetailRow label="Founded" value={listItem.foundedYear} />
        <DetailRow label="ID" value={listItem.id} />

        <View style={styles.descriptionSection}>
          <Text style={styles.label}>About</Text>
          <Text style={styles.description}>{listItem.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 28,
  },
  rankingBadge: {
    backgroundColor: colors.rankingBackground,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
  rankingLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.surfaceMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  rankingValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.rankingText,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMuted,
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'right',
    flexShrink: 1,
    marginLeft: 16,
  },
  descriptionSection: {
    marginTop: 16,
    paddingTop: 4,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
    marginTop: 8,
  },
});
