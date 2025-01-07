import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogoutModal = ({ isVisible, onClose, onLogout }) => {
  if (!isVisible) return null; // Jangan render modal jika tidak visible

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Apakah Anda yakin untuk keluar?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onLogout} style={styles.yesButton}>
              <Text style={styles.buttonText}>Ya</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.noButton}>
              <Text style={styles.buttonText}>Tidak</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Latar belakang semi-transparan
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    elevation: 4, // Shadow untuk Android
    shadowColor: '#000', // Shadow untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },
  yesButton: {
    flex: 1,
    backgroundColor: '#3B82F6', // Warna biru
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  noButton: {
    flex: 1,
    backgroundColor: '#6B7280', // Warna abu-abu
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default LogoutModal;
