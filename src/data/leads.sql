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
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `id` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `cep` varchar(20) NOT NULL,
  `cidade` varchar(120) NOT NULL,
  `bairro` varchar(120) NOT NULL,
  `rua` varchar(150) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `complemento` varchar(120) DEFAULT NULL,
  `observacoes` text DEFAULT NULL,
  `total` decimal(10,2) DEFAULT 0.00,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `leads`
--

INSERT INTO `leads` (`id`, `nome`, `cpf`, `cep`, `cidade`, `bairro`, `rua`, `numero`, `complemento`, `observacoes`, `total`, `created_at`) VALUES
(1, 'Hermano Torres', '079.431.583-69', '60125-120', 'Fortaleza/CE', 'Meireles', 'Rua Joaquim Nabuco 825', 'dietrich N°825', 'apt 601', '', 189.00, '2025-12-09 13:15:03'),
(2, 'Hermano Torres', '079.431.583-69', '60125-120', 'Fortaleza/CE', 'Meireles', 'Rua Joaquim Nabuco 825', 'dietrich N°825', '', '', 757.00, '2025-12-10 10:45:20'),
(3, 'Luana Silva Sousa', '626.061.983-95', '60820-150', 'Fortaleza/CE', 'Jardim das Oliveiras', 'Rua da Monguba', '103', '', '', 169.00, '2025-12-11 17:18:03'),
(4, 'Ricardo Viana Freire', '495.699.533-49', '60175-000', 'Fortaleza/CE', 'Aldeota', 'Rua Monsenhor Catão', '1450', 'Apto 1500', '', 678.80, '2025-12-12 00:31:02'),
(5, 'mmic q s js s', '522.462.380-48', '60000-000', 'aquiraz', 'centro', 'rua 01', '02', 'zero', '', 785.90, '2025-12-12 14:30:54'),
(6, 'mmic q s js s', '522.462.380-48', '60000-000', 'aquiraz', 'centro', 'rua 01', '02', 'zero', '', 785.90, '2025-12-12 14:31:17'),
(7, 'mmic q s js s', '522.462.380-48', '60000-000', 'aquiraz', 'centro', 'rua 01', '02', 'zero', '', 785.90, '2025-12-12 15:32:50'),
(8, 'mmic q s js s', '522.462.380-48', '60000-000', 'aquiraz', 'centro', 'rua 01', '02', 'zero', '', 785.90, '2025-12-12 15:40:22'),
(9, 'Manuela Dantas', '963.177.793-68', '60810-320', 'Fortaleza/CE', 'Guararapes', 'Rua Justino Café Neto', '240', 'Apto 501 bloco B', '', 189.00, '2025-12-17 01:33:12'),
(10, 'Aline da Silva Gouveia', '000.328.993-19', '60310-400', 'Fortaleza/Ce', 'Jacarecanga', 'Rua Padre Constantino', '19', 'Torre 4 apto 601', '', 119.20, '2025-12-18 01:23:08'),
(11, 'Carmem marfisa Ximenes Gomes Frota', '815.846.363-00', '60170-041', 'Fortaleza/CE', 'Aldeota', 'Rua Leonardo Mota', '1515', '1492 A', '', 104.30, '2025-12-18 22:52:19'),
(12, 'Jayne Santiago', '605.340.533-78', '60165-210', 'Fortaleza/CE', 'Mucuripe', 'Rua Doutor José Frota', '255', 'Apto 103 Netuno - condomínio jardins de Atlântida', '', 507.00, '2025-12-19 18:38:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
