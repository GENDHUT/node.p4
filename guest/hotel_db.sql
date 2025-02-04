-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Feb 2025 pada 08.43
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `guestbook`
--

CREATE TABLE `guestbook` (
  `GuestBookID` int(11) NOT NULL,
  `NamaTamu` varchar(100) NOT NULL,
  `EmailTamu` varchar(100) NOT NULL,
  `PhoneTamu` varchar(20) NOT NULL,
  `RoomID` int(11) DEFAULT NULL,
  `CheckInTime` datetime DEFAULT current_timestamp(),
  `Notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `guestbook`
--

INSERT INTO `guestbook` (`GuestBookID`, `NamaTamu`, `EmailTamu`, `PhoneTamu`, `RoomID`, `CheckInTime`, `Notes`) VALUES
(2, 'test', 'test@gmail.com', '081232546710', 2, '2025-02-04 07:29:00', 'qawe'),
(3, 'yaas', 'yass@gmail.com', '081232546710', 1, '2025-02-04 07:37:00', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `room`
--

CREATE TABLE `room` (
  `RoomID` int(11) NOT NULL,
  `RoomNumber` varchar(10) NOT NULL,
  `RoomType` varchar(50) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `Status` enum('Available','Occupied','Maintenance') DEFAULT 'Available'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `room`
--

INSERT INTO `room` (`RoomID`, `RoomNumber`, `RoomType`, `Price`, `Status`) VALUES
(1, '1', 'Mewah', 100000.00, 'Occupied'),
(2, 'test ruang', 'Mewah', 1000000.00, 'Occupied');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `guestbook`
--
ALTER TABLE `guestbook`
  ADD PRIMARY KEY (`GuestBookID`),
  ADD KEY `RoomID` (`RoomID`);

--
-- Indeks untuk tabel `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`RoomID`),
  ADD UNIQUE KEY `RoomNumber` (`RoomNumber`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `guestbook`
--
ALTER TABLE `guestbook`
  MODIFY `GuestBookID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `room`
--
ALTER TABLE `room`
  MODIFY `RoomID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `guestbook`
--
ALTER TABLE `guestbook`
  ADD CONSTRAINT `guestbook_ibfk_1` FOREIGN KEY (`RoomID`) REFERENCES `room` (`RoomID`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
