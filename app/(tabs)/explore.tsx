import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TabTwoScreen() {
  // Product data with only two rows
  const products = [
    { id: '1', name: 'Milk', goodUntil: '2025-04-01' },
    { id: '2', name: 'Eggs', goodUntil: '2025-04-10' },
    { id: '2', name: 'Eggs', goodUntil: '2025-04-10' },
    { id: '2', name: 'Eggs', goodUntil: '2025-04-10' },
    { id: '2', name: 'Eggs', goodUntil: '2025-04-10' },
    { id: '2', name: 'Eggs', goodUntil: '2025-04-10' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.dashboardText}>DASHBOARD</Text>
        <Text style={styles.welcomeText}>Welcome Back -username</Text>
      </View>

      {/* Dashboard Content */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Total Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Product Expiring</Text>
        </TouchableOpacity>
      </View>

      {/* Add Product Button */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="photo-camera" size={24} color="#27391C" style={styles.icon} />
          <Text style={styles.addButtonText}>Add Product</Text>
        </TouchableOpacity>
      </View>

       
       <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.product}>
          <Text style={styles.productText}>Delete Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.foodbank}>
          <Text style={styles.productText}>FoodBank Near</Text>
          <Icon name="place" size={20} color="#000" style={styles.iconlocation} />

        </TouchableOpacity>
      </View>

      {/* Table Section */}
      <View style={styles.tableContainer}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, { flex: 1 }]}>Product</Text>
          <View style={[styles.tableHeaderTextContainer, { flex: 1 }]}>
            <Text style={styles.tableHeaderText}>Good Until</Text>
            <Icon name="delete" size={20} color="#fff" style={styles.deleteIcon} />
          </View>
        </View>

        {/* Table Rows */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, { flex: 1 }]}>{item.name}</Text>
              <Text style={[styles.tableCell, { flex: 1 }]}>{item.goodUntil}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  dashboardText: {
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: '400',
  },
  welcomeText: {
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: '300',
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#27391C',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    marginHorizontal: 5,
    height:100,
  },

  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  
  product: {
    flex: 1,
    // backgroundColor: '',
    paddingVertical: 15,
    paddingHorizontal: 10,
    // borderRadius: 10,
    elevation: 3,
    
    // alignItems: 'center',
    marginHorizontal: 5,
  },
  foodbank: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  // Vertically centers the items in the row
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,  // Ensures the border is visible
    borderColor: '#2B5846',  // Sets the border color
    elevation: 3,
    marginHorizontal: 5,
  },
  iconlocation:{marginLeft:30,},
  productText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '400',
  },

  buttonWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,  
    borderColor: '#2B5846',  // Sets the border color
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 390,
    marginBottom:20,
  },
  icon: {
    marginRight: 80,
    

  },
  addButtonText: {
    color: '#27391C',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginLeft:20,
  },

  /* Table Styles */
  tableContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#27391C',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  tableHeaderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tableHeaderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  deleteIcon: {
    marginLeft: 50, // Small gap beside the text
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  tableCell: {
    fontSize: 16,
    color: '#333',
  },
});
