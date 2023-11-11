import { View, Text, Image, Pressable, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const TodoList = ({ navigation }) => {
    const [task, setTask] = React.useState(""); 
	const [tasks, setTasks] = React.useState([]); 
	const [editIndex, setEditIndex] = React.useState(-1);

    const handleAddTask = () => { 
		if (task) { 
			if (editIndex !== -1) { 
				// Edit existing task 
				const updatedTasks = [...tasks]; 
				updatedTasks[editIndex] = task; 
				setTasks(updatedTasks); 
				setEditIndex(-1); 
			} else { 
				// Add new task 
				setTasks([...tasks, task]); 
			} 
			setTask(""); 
		} 
	}; 

    const handleEditTask = (index) => { 
		const taskToEdit = tasks[index]; 
		setTask(taskToEdit); 
		setEditIndex(index); 
	}; 

	const handleDeleteTask = (index) => { 
		const updatedTasks = [...tasks]; 
		updatedTasks.splice(index, 1); 
		setTasks(updatedTasks); 
	}; 

    const renderItem = ({ item, index }) => ( 
		<View style={styles.task}> 
			<Text 
				style={styles.itemList}>{item}</Text> 
				<Pressable
                            onPress={() => handleEditTask(index)}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.black,
                                fontWeight: "bold"
                            }}>Edit</Text>
                </Pressable>
			
				<Pressable
                            onPress={() => handleDeleteTask(index)}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.black,
                                fontWeight: "bold"
                            }}>Delete</Text>
                </Pressable>
		
		</View> 
	); 

    const styles = StyleSheet.create({ 
		container: { 
			flex: 1, 
			padding: 40, 
			marginTop: 40, 
		}, 
		title: { 
			fontSize: 24, 
			fontWeight: "bold", 
			marginBottom: 20, 
		}, 
		heading: { 
			fontSize: 30, 
			fontWeight: "bold", 
			marginBottom: 7, 
			color: "green", 
		}, 
		input: { 
            borderColor: "#ccc",
			padding: 10, 
			marginBottom: 10, 
			borderRadius: 10, 
			fontSize: 18, 
            width: "100%"
		}, 
		addButton: { 
			padding: 10, 
			borderRadius: 10, 
			marginBottom: 10, 
		}, 
		addButtonText: { 
			color: "white", 
			fontWeight: "bold", 
			textAlign: "center", 
			fontSize: 18, 
		}, 
		task: { 
			flexDirection: "row", 
			justifyContent: "space-between", 
			alignItems: "center", 
			marginBottom: 15, 
			fontSize: 18, 
		}, 
		itemList: { 
			fontSize: 19, 
		}, 
		taskButtons: { 
			flexDirection: "row", 
		}, 
	}); 

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
			<SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
					<Pressable
                        onPress={() => navigation.navigate("Welcome")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            fontWeight: "bold",
							paddingTop: 0, 
							paddingLeft: 300
                        }}>Logout</Text>
                    </Pressable>
					<Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Started
					</Text>
					<View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Todo List: EL 105</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.white,
						color:COLORS.white,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter Task'
                            label="Enter Task"
							
                            placeholderTextColor={COLORS.black}
                            value={task} 
                            onChangeText={(text) => setTask(text)}
                            style={{
                                width: "100%",
								color: COLORS.white,
								
                            }}
                        />

                    </View>
                </View>
				<Button
                        title="Add Task"
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
						onPress={handleAddTask}>
							<Text style={styles.addButtonText}> 
					        {editIndex !== -1 ? title= "Update Task" : "Add Task"} 
				        	</Text>
				 </Button>
                    
					<FlatList 
                        data={tasks} 
                        renderItem={renderItem} 
                        keyExtractor={(item, index) => index.toString()} 
                     />
                
            </View>
        </SafeAreaView>
		</LinearGradient>
    )
}

export default TodoList