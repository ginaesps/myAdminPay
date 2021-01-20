-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-01-2021 a las 02:29:55
-- Versión del servidor: 8.0.22
-- Versión de PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `debt_system`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `debt`
--

CREATE TABLE `debt` (
  `id` bigint NOT NULL,
  `owner_id` bigint NOT NULL,
  `debtor_id` bigint NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `concept` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `debt`
--

INSERT INTO `debt` (`id`, `owner_id`, `debtor_id`, `amount`, `concept`, `created_at`) VALUES
(1, 1, 3, '30000', 'prueba', '2021-01-18 19:55:51'),
(2, 1, 1, '20000', 'prueba 2', '2021-01-18 19:56:08'),
(3, 5, 3, '200', 'no se ', '2021-01-19 02:28:31'),
(4, 8, 1, '250', 'buena pregunta', '2021-01-19 02:28:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `debtor`
--

CREATE TABLE `debtor` (
  `id` bigint NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `paternal_surname` varchar(50) NOT NULL,
  `maternal_surname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phone_number` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `debtor`
--

INSERT INTO `debtor` (`id`, `first_name`, `paternal_surname`, `maternal_surname`, `phone_number`, `email`, `password`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Julia', 'Verne', NULL, '3127777777', 'julia@gmail.com', '3127777777', 1, '2021-01-18 19:53:40', NULL),
(3, 'Rocío', 'Soni', 'Nieves', '5511111111', 'rocio@gmail.com', '5511111111', 1, '2021-01-18 19:55:19', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `owner`
--

CREATE TABLE `owner` (
  `id` bigint NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `paternal_surname` varchar(50) NOT NULL,
  `maternal_surname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phone_number` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `owner`
--

INSERT INTO `owner` (`id`, `first_name`, `paternal_surname`, `maternal_surname`, `phone_number`, `email`, `password`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Carlos', 'Gutierrez', 'Pedraza', '3121111111', 'carlos@gmail.com', '3121111111', 1, '2021-01-17 16:18:29', '2021-01-17 16:18:29'),
(5, 'Regina', 'Espinosa', 'González', '3122222222', 'mariana@gmail.com', '3122222222', 1, '2021-01-17 16:21:00', '2021-01-17 16:21:00'),
(8, 'Humberto', 'Ramírez', 'González', '3123333333', 'regina@gmail.com', '3123333333', 1, '2021-01-17 16:21:00', '2021-01-17 16:21:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment`
--

CREATE TABLE `payment` (
  `id` bigint NOT NULL,
  `debtor_id` bigint NOT NULL,
  `owner_id` bigint NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `concept` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `payment`
--

INSERT INTO `payment` (`id`, `debtor_id`, `owner_id`, `amount`, `concept`, `created_at`) VALUES
(1, 3, 1, '150', 'idk', '2021-01-19 02:29:06'),
(2, 1, 8, '150', ':)', '2021-01-19 02:29:06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `debt`
--
ALTER TABLE `debt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_debt_debtor` (`debtor_id`) USING BTREE,
  ADD KEY `fk_debt_owner` (`owner_id`) USING BTREE;

--
-- Indices de la tabla `debtor`
--
ALTER TABLE `debtor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_debtor_phone_number` (`phone_number`) USING BTREE;

--
-- Indices de la tabla `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_owner_phone_number` (`phone_number`);

--
-- Indices de la tabla `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_payment_debtor` (`debtor_id`),
  ADD KEY `fk_payment_owner` (`owner_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `debt`
--
ALTER TABLE `debt`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `debtor`
--
ALTER TABLE `debtor`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `owner`
--
ALTER TABLE `owner`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `payment`
--
ALTER TABLE `payment`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `debt`
--
ALTER TABLE `debt`
  ADD CONSTRAINT `fk_debt_debtor` FOREIGN KEY (`debtor_id`) REFERENCES `debtor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_debt_owner` FOREIGN KEY (`owner_id`) REFERENCES `owner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `fk_payment_debtor` FOREIGN KEY (`debtor_id`) REFERENCES `debtor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_payment_owner` FOREIGN KEY (`owner_id`) REFERENCES `owner` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
