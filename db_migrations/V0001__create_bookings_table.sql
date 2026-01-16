-- Создание таблицы для хранения бронирований
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    room_name VARCHAR(255) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time VARCHAR(10) NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50) NOT NULL,
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending'
);

-- Создание индекса для быстрого поиска по дате и кабинету
CREATE INDEX idx_bookings_date_room ON bookings(booking_date, room_name);

-- Создание индекса для поиска по статусу
CREATE INDEX idx_bookings_status ON bookings(status);