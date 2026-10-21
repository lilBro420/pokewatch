import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// iPhone 15 Pro Max dimensions simulation
const IPHONE_15_PRO_MAX_WIDTH = 393;
const IPHONE_15_PRO_MAX_HEIGHT = 852;

// Factor de escala para adaptar al dispositivo actual
const scale = Math.min(SCREEN_WIDTH / IPHONE_15_PRO_MAX_WIDTH, SCREEN_HEIGHT / IPHONE_15_PRO_MAX_HEIGHT);

interface Iphone15ScreenProps {
  onClose?: () => void;
}

const Iphone15Screen: React.FC<Iphone15ScreenProps> = ({ onClose }) => {
  const [showClock, setShowClock] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Status Bar area (simulated) - iPhone 15 has a thin status bar */}
      <View style={styles.statusBar} />

      {/* Dynamic Island / Notch area - iPhone 15 characteristic */}
      <View style={styles.dynamicIsland}>
        <View style={styles.dynamicIslandLeft} />
        <View style={styles.dynamicIslandRight} />
      </View>

      {/* Main content area with rounded corners simulation */}
      <View style={styles.mainContainer}>
        {/* Top area before the clock/cell phone content */}
        <View style={styles.topSection} />

        {/* Clock mode - showing a clock face */}
        {showClock && (
          <View style={styles.clockContainer}>
            <Text style={styles.clockTime}>12:34</Text>
            <Text style={styles.clockDate}>VIE 24 MAY</Text>
          </View>
        )}

        {/* Cell Phone mode - showing cell phone interface */}
        {!showClock && (
          <View style={styles.cellPhoneContainer}>
            {/* Header with apps */}
            <View style={styles.cellPhoneHeader}>
              <Text style={styles.cellPhoneTitle}>INICIO</Text>
              <Text style={styles.cellPhoneTime}>12:34</Text>
            </View>

            {/* App icons grid */}
            <View style={styles.appGrid}>
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
              <View style={styles.appIcon} />
            </View>

            {/* Footer with swipe indicator */}
            <View style={styles.cellPhoneFooter}>
              <Text style={styles.swipeText}>arrastrar para abajo para actualizar</Text>
            </View>
          </View>
        )}
      </View>

      {/* Home indicator at bottom (iPhone 15 characteristic) */}
      <View style={styles.homeIndicator} />

      {/* Toggle button at the bottom center */}
      <TouchableOpacity
        style={styles.toggleButton}
        activeOpacity={0.8}
        onPress={() => setShowClock(!showClock)}
      >
        <Text style={styles.toggleButtonText}>
          {showClock ? 'VER CELULAR' : 'VER RELOJ'}
        </Text>
      </TouchableOpacity>

      {/* Close button when iPhone screen is shown */}
      {onClose && (
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

export default Iphone15Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C2E',
    // Simular proporción de iPhone 15 Pro Max
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },

  statusBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#1C1C2E',
    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },

  dynamicIsland: {
    position: 'absolute',
    top: 8,
    left: 0,
    right: 0,
    height: 44,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },

  dynamicIslandLeft: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },

  dynamicIslandRight: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },

  mainContainer: {
    flex: 1,
    width: IPHONE_15_PRO_MAX_WIDTH * scale,
    maxWidth: SCREEN_WIDTH * 0.8,
    marginTop: 44 + 8, // Accounting for status bar + dynamic island
    backgroundColor: '#000000',
    borderRadius: 30,
    overflow: 'hidden',
    paddingBottom: 30,
  },

  topSection: {
    height: 50,
    backgroundColor: '#000000',
  },

  // Clock mode styles
  clockContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  clockTime: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },

  clockDate: {
    color: '#86868B',
    fontSize: 18,
    marginTop: 8,
    fontFamily: 'Helvetica Neue',
  },

  // Cell Phone mode styles
  cellPhoneContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000',
  },

  cellPhoneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  cellPhoneTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Helvetica Neue',
  },

  cellPhoneTime: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  appGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  appIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#3A3A4A',
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  cellPhoneFooter: {
    marginTop: 20,
    paddingBottom: 30,
  },

  swipeText: {
    color: '#8E8E93',
    fontSize: 12,
    textAlign: 'center',
  },

  // Toggle button styles
  toggleButton: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    marginHorizontal: 20,
  },

  toggleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Helvetica Neue',
  },

  homeIndicator: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeIndicatorDots: {
    width: 30,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeIndicatorDotsDot: {
    width: 8,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 4,
    marginHorizontal: 2,
  },

  closeButton: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#30363D',
    borderRadius: 20,
    marginHorizontal: 20,
  },

  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Helvetica Neue',
  },
});