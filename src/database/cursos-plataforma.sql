-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-01-2023 a las 20:44:05
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursos-plataforma`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `course_instructor` varchar(255) DEFAULT NULL,
  `course_price` float DEFAULT NULL,
  `course_description` varchar(255) DEFAULT NULL,
  `course_date` varchar(255) DEFAULT NULL,
  `course_place` varchar(255) DEFAULT NULL,
  `course_modality` varchar(255) DEFAULT NULL,
  `month_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`course_id`, `course_name`, `course_instructor`, `course_price`, `course_description`, `course_date`, `course_place`, `course_modality`, `month_id`) VALUES
(102, 'Ciclo de conferencias: grupos vulnerables en la atención social', 'Lic. Verónica Perea Rivera / Mtra. Virginia Emilia Fajardo Martínez', 0, 'Sin costo sólo personal del HIMFG. Presentar copia de credencial institucional. Cupo limitado a 60 personas de forma presencial.', 'Del 12 de enero al 12 de octubre', 'ANEXO A', 'PRESENCIAL', 0),
(104, 'Sesiones de capacitación técnica y actualización del laboratorio clínico', 'M. en C. Israel Parra Ortega', 0, 'Sin costo sólo personal del HIMFG. Presentar copia de credencial institucional. Requisito: Estar interesado en el tema y cubrir el 80% de asistencia. Cupo limitado a 20 personas de forma presencial.', 'Del 12 de enero al 14 de diciembre', 'Aula 7', 'PRESENCIAL', 0),
(105, 'Curso monográfico: Certificación hospitalaria, estándares\r\nnecesarios para brindar servicios de calidad', 'Mtra. Olivia Aguilar Guzmán', 800, NULL, 'Del 16 al 20 de enero', 'Auditorio Jesús Kumate', 'HÍBRIDA', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meses`
--

CREATE TABLE `meses` (
  `month_id` int(11) NOT NULL,
  `month_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `rol_id` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `user_name` varchar(255) NOT NULL,
  `user_profession` varchar(255) NOT NULL,
  `user_institution` varchar(255) NOT NULL,
  `user_position` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_age` int(11) NOT NULL,
  `user_email` varchar(60) NOT NULL,
  `user_recent` varchar(255) DEFAULT NULL,
  `user_course_recent` varchar(255) DEFAULT NULL,
  `user_last_year` int(11) DEFAULT NULL,
  `user_nationality` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`user_name`, `user_profession`, `user_institution`, `user_position`, `user_phone`, `user_age`, `user_email`, `user_recent`, `user_course_recent`, `user_last_year`, `user_nationality`) VALUES
('José Guitierrez', 'Biólogo', 'IMSS', 'Enfermero especialista', '123456', 33, 'email@email.com', NULL, NULL, NULL, NULL),
('Ricardo José Guevara Guzmán', 'Pasante', 'IMSS', 'Pasante de medicina', '5531241831', 21, 'ricardo_ggzicm@outlook.com', NULL, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`course_id`);

--
-- Indices de la tabla `meses`
--
ALTER TABLE `meses`
  ADD PRIMARY KEY (`month_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`user_email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `meses`
--
ALTER TABLE `meses`
  MODIFY `month_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
