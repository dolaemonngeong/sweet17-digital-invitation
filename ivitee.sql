-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Nov 2023 pada 04.44
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ivitee`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `rsvp`
--

CREATE TABLE `rsvp` (
  `RSVP_id` int(11) NOT NULL,
  `Nama` varchar(100) NOT NULL,
  `Kedatangan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `rsvp`
--

INSERT INTO `rsvp` (`RSVP_id`, `Nama`, `Kedatangan`) VALUES
(1, 'Ghifari', 1),
(2, 'Afi', 0),
(17, '', 0),
(18, '', 0),
(19, '', 0),
(20, '', 0),
(21, '', 0),
(22, '', 0),
(23, '', 0),
(24, '', 0),
(25, '', 0),
(26, '', 0),
(27, '', 0),
(28, '', 0),
(29, '', 0),
(30, '', 0),
(31, 'Ghifari', 0),
(32, 'Ghifari', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `wishes`
--

CREATE TABLE `wishes` (
  `Wish_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `message` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `wishes`
--

INSERT INTO `wishes` (`Wish_id`, `name`, `message`) VALUES
(1, 'Ghifari', 'Agif'),
(2, 'Ghifari', 'Helloooo'),
(3, 'Ghifari', 'DAdada'),
(4, 'Ghifari', 'Asdada'),
(5, 'Ghifari', 'Adadada'),
(6, 'Ghifari', 'Adadada'),
(7, 'Ghifari', 'Adadada'),
(8, 'Ghifari', 'Asdada'),
(9, 'Ghifari', 'ASDada'),
(10, '', ''),
(11, 'Afi', 'khk'),
(12, '', ''),
(13, 'Ghifari', 'ADAsda');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `rsvp`
--
ALTER TABLE `rsvp`
  ADD PRIMARY KEY (`RSVP_id`);

--
-- Indeks untuk tabel `wishes`
--
ALTER TABLE `wishes`
  ADD PRIMARY KEY (`Wish_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `rsvp`
--
ALTER TABLE `rsvp`
  MODIFY `RSVP_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT untuk tabel `wishes`
--
ALTER TABLE `wishes`
  MODIFY `Wish_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
