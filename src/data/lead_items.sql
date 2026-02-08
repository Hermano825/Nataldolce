-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 21, 2025 at 12:33 PM
-- Server version: 11.8.3-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u277735993_dolceclientes`
--

-- --------------------------------------------------------

--
-- Table structure for table `lead_items`
--

CREATE TABLE `lead_items` (
  `id` int(11) NOT NULL,
  `lead_id` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `variant_label` varchar(120) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT 0.00,
  `quantity` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `lead_items`
--

INSERT INTO `lead_items` (`id`, `lead_id`, `product_name`, `variant_label`, `price`, `quantity`) VALUES
(1, 1, 'Bolo Red Natal', '', 189.00, 1),
(2, 2, 'Bolo Sagrada Família', '15 fatias', 229.00, 1),
(3, 2, 'Bolo Sagrada Família', '30 fatias', 339.00, 1),
(4, 2, 'Bolo Red Natal', '8 fatias', 189.00, 1),
(5, 3, 'Bolo Merengue de Natal', '', 169.00, 1),
(6, 4, 'Bolo Boneco de Neve', '', 169.00, 1),
(7, 4, 'Box Morangos Natalinos', '', 139.90, 1),
(8, 4, 'Box Morangos Natalinos', '', 139.90, 1),
(9, 4, 'Caixa de Chocolates Natalinos', '', 115.00, 1),
(10, 4, 'Caixa de Chocolates Natalinos', '', 115.00, 1),
(11, 5, 'Bolo Red Natal', '', 189.00, 1),
(12, 5, 'Bolo Red Natal', '', 189.00, 1),
(13, 5, 'Bolo Red Natal', '', 189.00, 1),
(14, 5, 'Bolo Merengue de Natal', '', 169.00, 1),
(15, 5, 'Uvas Divinas', '', 49.90, 1),
(16, 6, 'Bolo Red Natal', '', 189.00, 1),
(17, 6, 'Bolo Red Natal', '', 189.00, 1),
(18, 6, 'Bolo Red Natal', '', 189.00, 1),
(19, 6, 'Bolo Merengue de Natal', '', 169.00, 1),
(20, 6, 'Uvas Divinas', '', 49.90, 1),
(21, 7, 'Bolo Red Natal', '', 189.00, 1),
(22, 7, 'Bolo Red Natal', '', 189.00, 1),
(23, 7, 'Bolo Red Natal', '', 189.00, 1),
(24, 7, 'Bolo Merengue de Natal', '', 169.00, 1),
(25, 7, 'Uvas Divinas', '', 49.90, 1),
(26, 8, 'Bolo Red Natal', '', 189.00, 1),
(27, 8, 'Bolo Red Natal', '', 189.00, 1),
(28, 8, 'Bolo Red Natal', '', 189.00, 1),
(29, 8, 'Bolo Merengue de Natal', '', 169.00, 1),
(30, 8, 'Uvas Divinas', '', 49.90, 1),
(31, 9, 'Bolo Red Natal', '', 189.00, 1),
(32, 10, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(33, 10, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(34, 10, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(35, 10, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(36, 10, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(37, 10, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(38, 10, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(39, 10, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(40, 11, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(41, 11, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(42, 11, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(43, 11, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(44, 11, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(45, 11, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(46, 11, 'Bem Casado na Bola de Acrílico', '', 14.90, 1),
(47, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(48, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(49, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(50, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(51, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(52, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(53, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(54, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(55, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(56, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(57, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(58, 12, 'Monoporção Presentes de Natal', '', 39.00, 1),
(59, 12, 'Monoporção Presentes de Natal', '', 39.00, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lead_items`
--
ALTER TABLE `lead_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_lead_items_lead` (`lead_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lead_items`
--
ALTER TABLE `lead_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lead_items`
--
ALTER TABLE `lead_items`
  ADD CONSTRAINT `fk_lead_items_lead` FOREIGN KEY (`lead_id`) REFERENCES `leads` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
