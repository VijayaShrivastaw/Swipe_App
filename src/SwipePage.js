import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useUser } from './UserContext';

const SwipePage = ({ navigation }) => {
    const { user } = useUser();

    // Initial cards data
    const [cards, setCards] = useState([
        {
            id: 1,
            name: 'Anie',
            imageUrl: 'https://img.freepik.com/free-photo/happy-latin-businesswoman-standing-with-arms-crossed-against-isolated-background_662251-639.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719446400&semt=sph',
            age: '26',
            gender: 'Female',
            location: 'USA'
        },
        {
            id: 2,
            name: 'Jam',
            imageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-1252107-2381069.jpg&fm=jpg',
            age: '20',
            gender: 'Female',
            location: 'UK'
        },
        {
            id: 3,
            name: 'Ansh',
            imageUrl: 'https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg',
            age: '30',
            gender: 'Male',
            location: 'IND'
        },
    ]);

    // State for modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editedCard, setEditedCard] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedAge, setEditedAge] = useState('');
    const [editedGender, setEditedGender] = useState('');
    const [editedLocation, setEditedLocation] = useState('');

    // Function to open modal for editing a card
    const openEditModal = (card) => {
        setEditedCard(card);
        setEditedName(card.name);
        setEditedAge(card.age);
        setEditedGender(card.gender);
        setEditedLocation(card.location);
        setIsModalVisible(true);
    };

    // Function to save edited data
    const saveEditedData = () => {
        const updatedCards = cards.map((card) =>
            card.id === editedCard.id ? { ...card, name: editedName, age: editedAge, gender: editedGender, location: editedLocation } : card
        );
        setCards(updatedCards);
        setIsModalVisible(false);
    };

    // Render card function
    const renderCard = (card, cardIndex) => (
        <View style={styles.cardContainer}>
            <Image source={{ uri: card.imageUrl }} style={styles.cardImage} />
            <Text>{`Name : ${card.name}`}</Text>
            <Text>{`Age: ${card.age}`}</Text>
            <Text>{`Gender: ${card.gender}`}</Text>
            <Text>{`Location: ${card.location}`}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => openEditModal(card)}>
                <Text style={{ color: 'blue' }}>Edit</Text>
            </TouchableOpacity>
        </View>
    );

    // Handle swipe left
    const handleSwipeLeft = (cardIndex) => {
        console.log('Disliked:', cards[cardIndex].name);
    };

    // Handle swipe right
    const handleSwipeRight = (cardIndex) => {
        console.log('Liked:', cards[cardIndex].name);
    };

    return (
        <View style={styles.container}>
            <Swiper
                cards={cards}
                renderCard={(card, cardIndex) => renderCard(card, cardIndex)}
                onSwipedLeft={handleSwipeLeft}
                onSwipedRight={handleSwipeRight}
                cardIndex={0} // Optionally, start from a specific index
                backgroundColor="white"
                stackSize={3} // Number of cards shown in the stack
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            value={editedName}
                            onChangeText={setEditedName}
                            style={styles.input}
                            placeholder="Name"
                        />
                        <TextInput
                            value={editedAge}
                            onChangeText={setEditedAge}
                            style={styles.input}
                            placeholder="Age"
                            keyboardType="numeric"
                        />
                        <TextInput
                            value={editedGender}
                            onChangeText={setEditedGender}
                            style={styles.input}
                            placeholder="Gender"
                        />
                        <TextInput
                            value={editedLocation}
                            onChangeText={setEditedLocation}
                            style={styles.input}
                            placeholder="Location"
                        />
                        <Button title="Save" onPress={saveEditedData} />
                        <View style={{marginTop:10}}>
                        <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonContainer}>
                <Button title="My Profile" onPress={() => navigation.navigate('ProfilePage')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    cardImage: {
        width: 300,
        height: 300,
    },
    editButton: {
        marginTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '80%',
    },
});

export default SwipePage;
