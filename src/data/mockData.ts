// Mock data for the dashboard

export const garages = [
  {
    id: 1,
    name: "Downtown Garage",
    location: "123 Main St, Downtown",
    status: "Active",
    totalStock: 245,
    lat: 40.7128,
    lng: -74.0060,
    manager: "John Smith",
    phone: "+1 234-567-8901"
  },
  {
    id: 2,
    name: "Eastside Auto Center",
    location: "456 East Ave, Eastside",
    status: "Maintenance",
    totalStock: 156,
    lat: 40.7589,
    lng: -73.9851,
    manager: "Sarah Johnson",
    phone: "+1 234-567-8902"
  },
  {
    id: 3,
    name: "West End Service",
    location: "789 West Blvd, West End",
    status: "Active",
    totalStock: 312,
    lat: 40.7505,
    lng: -73.9934,
    manager: "Mike Davis",
    phone: "+1 234-567-8903"
  },
  {
    id: 4,
    name: "North Point Tyres",
    location: "321 North St, Uptown",
    status: "Active",
    totalStock: 189,
    lat: 40.7831,
    lng: -73.9712,
    manager: "Emily Wilson",
    phone: "+1 234-567-8904"
  }
];

export const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 234-567-8901",
    role: "Manager",
    garage: "Downtown Garage",
    status: "Active"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 234-567-8902",
    role: "Manager",
    garage: "Eastside Auto Center",
    status: "Active"
  },
  {
    id: 3,
    name: "Admin User",
    email: "admin@example.com",
    phone: "+1 234-567-8900",
    role: "Admin",
    garage: "All Garages",
    status: "Active"
  },
  {
    id: 4,
    name: "Mike Davis",
    email: "mike@example.com",
    phone: "+1 234-567-8903",
    role: "Manager",
    garage: "West End Service",
    status: "Active"
  }
];

export const tyres = [
  {
    id: 1,
    brand: "Michelin",
    size: "215/65R16",
    category: "Summer",
    price: 120,
    totalStock: 45
  },
  {
    id: 2,
    brand: "Bridgestone",
    size: "225/50R17",
    category: "All-Season",
    price: 150,
    totalStock: 32
  },
  {
    id: 3,
    brand: "Continental",
    size: "195/60R15",
    category: "Winter",
    price: 110,
    totalStock: 28
  },
  {
    id: 4,
    brand: "Goodyear",
    size: "235/45R18",
    category: "Performance",
    price: 180,
    totalStock: 15
  }
];

export const reservations = [
  {
    id: 1,
    customer: "Alice Brown",
    garage: "Downtown Garage",
    tyre: "Michelin 215/65R16",
    quantity: 4,
    date: "2024-01-15",
    status: "Confirmed",
    phone: "+1 555-0101"
  },
  {
    id: 2,
    customer: "Bob Wilson",
    garage: "West End Service",
    tyre: "Bridgestone 225/50R17",
    quantity: 2,
    date: "2024-01-16",
    status: "Pending",
    phone: "+1 555-0102"
  },
  {
    id: 3,
    customer: "Carol Davis",
    garage: "North Point Tyres",
    tyre: "Continental 195/60R15",
    quantity: 4,
    date: "2024-01-14",
    status: "Completed",
    phone: "+1 555-0103"
  }
];

export const vehicles = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    plate: "ABC-123",
    owner: "Alice Brown",
    tyreSize: "215/65R16"
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2019,
    plate: "XYZ-789",
    owner: "Bob Wilson",
    tyreSize: "225/50R17"
  },
  {
    id: 3,
    make: "Ford",
    model: "Focus",
    year: 2021,
    plate: "DEF-456",
    owner: "Carol Davis",
    tyreSize: "195/60R15"
  }
];

export const garageHours = [
  {
    id: 1,
    garage: "Downtown Garage",
    day: "Monday",
    openTime: "08:00",
    closeTime: "18:00"
  },
  {
    id: 2,
    garage: "Downtown Garage",
    day: "Tuesday",
    openTime: "08:00",
    closeTime: "18:00"
  },
  {
    id: 3,
    garage: "Eastside Auto Center",
    day: "Monday",
    openTime: "09:00",
    closeTime: "17:00"
  }
];

export const notifications = [
  {
    id: 1,
    title: "Low Stock Alert",
    message: "Downtown Garage is running low on 215/65R16 tyres",
    status: "Unread",
    timestamp: "2024-01-15 14:30"
  },
  {
    id: 2,
    title: "New Reservation",
    message: "Bob Wilson booked a tyre change for tomorrow",
    status: "Read",
    timestamp: "2024-01-15 12:15"
  }
];

export const stockAlerts = [
  {
    id: 1,
    garage: "Downtown Garage",
    tyre: "Michelin 215/65R16",
    currentQuantity: 5,
    alertType: "Low Stock",
    urgency: "Medium"
  },
  {
    id: 2,
    garage: "Eastside Auto Center",
    tyre: "Goodyear 235/45R18",
    currentQuantity: 0,
    alertType: "Out of Stock",
    urgency: "High"
  }
];

// Dashboard KPI data
export const dashboardKPIs = {
  totalReservationsToday: 12,
  completedReservations: 8,
  pendingReservations: 4,
  totalGarages: 4,
  stockAlerts: 2
};

// Chart data
export const reservationTrends = [
  { day: 'Mon', reservations: 12 },
  { day: 'Tue', reservations: 15 },
  { day: 'Wed', reservations: 8 },
  { day: 'Thu', reservations: 18 },
  { day: 'Fri', reservations: 22 },
  { day: 'Sat', reservations: 25 },
  { day: 'Sun', reservations: 10 }
];

export const stockDistribution = [
  { name: 'Summer', value: 40, color: '#00BFFF' },
  { name: 'Winter', value: 25, color: '#9945FF' },
  { name: 'All-Season', value: 30, color: '#00FF7F' },
  { name: 'Performance', value: 5, color: '#FF6B35' }
];