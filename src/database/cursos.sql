-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-02-2023 a las 20:20:54
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `course_name` varchar(255) NOT NULL,
  `course_instructor` varchar(255) DEFAULT NULL,
  `course_price` float NOT NULL,
  `course_place` varchar(255) DEFAULT NULL,
  `course_image` varchar(255) DEFAULT NULL,
  `course_pdf` varchar(255) DEFAULT NULL,
  `modality_id` int(11) DEFAULT NULL,
  `course_start_date` date NOT NULL,
  `course_finish_date` date NOT NULL,
  `month_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`course_name`, `course_instructor`, `course_price`, `course_place`, `course_image`, `course_pdf`, `modality_id`, `course_start_date`, `course_finish_date`, `month_id`) VALUES
('5to Congreso de enfermería en alta especialidad de la CCINSHAE', 'E.E.I. Angélica María Hernández Tapia', 0, 'Hospital Infantil de México Federico Gómez', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676680009/Banner-5o-congreso-01_bligem.webp', 'https://drive.google.com/file/d/1-kP_rnGssAP3yUFdyl9Ik44_CTltaLBr/view?usp=sharing', 3, '2023-02-16', '2023-02-17', 1),
('8º Curso para padres para el cuidado del niño con hemofilia', NULL, 500, 'Anexo A', NULL, NULL, 1, '2023-03-03', '2023-11-03', 2),
('Atención psicológica en el paciente hospitalizado', NULL, 500, 'Aula 6', NULL, NULL, 1, '2023-04-17', '2023-04-21', 3),
('Bioinformática, una herramienta indispensable en la investigación', '', 1500, 'Sala de videoconferencias, 6º piso del Edificio de Hemato-Oncología e Investigación', NULL, NULL, 1, '2023-04-24', '2023-04-28', 3),
('Capacitación en micología clínica', 'M. en C.I. Jesús Reséndiz Sánchez/ I.B.T. Jorge Mauricio Díaz Barreto', 10000, 'Laboratorio', NULL, NULL, 1, '2023-03-01', '2023-04-28', 2),
('Capacitación en micología clínica - Mayo', NULL, 10000, 'Laboratorio', NULL, NULL, 1, '2023-05-02', '2023-06-30', 4),
('Ciclo de conferencias: grupos vulnerables en la atención social', 'Lic. Verónica Perea Rivera / Mtra. Virginia Emilia Fajardo Martínez', 0, 'Anexo A', NULL, NULL, 1, '2023-01-12', '2023-10-12', 0),
('Construcción del conocimiento para la investigación social', NULL, 300, 'Virtual', NULL, NULL, 2, '2023-04-10', '2023-04-14', 3),
('Curso básico de metodología de la investigación ', NULL, 0, 'Plataforma Moodle', NULL, NULL, 2, '2023-03-01', '2023-05-01', 2),
('Curso de bioseguridad hospitalaria', 'Dra. Marcela Salazar García', 0, 'Aulas 3 y 4, 6 piso del Edificio de Hemato-Oncología eInvestigación', NULL, NULL, 2, '2023-02-01', '2023-03-01', 1),
('Curso de preparación para el examen de grado de la especialidad de enfermería', 'E.E.I. Maricela Cruz Jiménez', 800, 'Sala de videoconferencias, 6º piso del Edificio de Hemato-Oncología e Investigación', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676680008/examen-enfermeria-min_h8ysep.webp', 'https://drive.google.com/file/d/1QbgilSpYdjxTnkOD0ZO9hWhmhcLEbc1F/view', 1, '2023-02-08', '2023-02-10', 1),
('Curso de reentrenamiento en operación de acelerador lineal', NULL, 0, 'Aula de Radioterapia', NULL, NULL, 1, '2023-05-22', '2023-05-26', 4),
('Curso de reentrenamiento en seguridad radiológica', NULL, 0, 'Aula de Radioterapia', NULL, NULL, 1, '2023-05-15', '2023-05-19', 4),
('Curso monográfico: Certificación hospitalaria, estándares\r\nnecesarios para brindar servicios de calidad', 'Mtra. Olivia Aguilar Guzmán', 800, 'Auditorio Jesús Kumate', NULL, NULL, 3, '2023-01-16', '2023-01-20', 0),
('Curso monográfico: Terapias de reemplazo renal continuas en el paciente pediátrico', NULL, 800, 'Auditorio Jesús Kumate', NULL, NULL, 3, '2023-05-17', '2023-05-19', 4),
('Curso sobre temas de psicología infantil y la adolescencia', NULL, 500, 'En línea', NULL, 'https://drive.google.com/file/d/1LBiFAoopQPCOnCNakM2i7q5E-trrcWDO/view?usp=sharing', 2, '2023-03-27', '2023-03-31', 2),
('Diplomado de actualización de alta especialidad en Ortopedia Pediátrica', NULL, 1500, 'Aula 12', NULL, NULL, NULL, '2023-02-02', '2023-08-31', 1),
('Diplomado de Encefalografía Clínica Pediátrica', NULL, 15000, 'Aula de Electroencefalografía Pediátrica', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676680009/Diplomado-de-encefalografi-a-cli-nica-01-min_cajwhh.webp', 'https://drive.google.com/file/d/1eEfEiV_QTs60h4-mXAusuhOn-ekg5UaW/view?usp=sharing', 1, '2023-03-01', '2023-08-31', 2),
('Diplomado en Cirugía Colorrectal Pediátrica', NULL, 10000, 'Servicio de Cirugía General', NULL, NULL, 1, '2023-03-01', '2024-02-28', 2),
('Diplomado en medicina transfusional y banco de sangre', NULL, 13500, 'Microsoft Teams', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676680009/diplomado-en-medicina-transfucional_uqtdc8.webp', NULL, 3, '2023-01-26', '2023-10-27', 0),
('Diplomado: Medicina integral del adolescente y Ginecología de niñas y adolescentes', NULL, 15000, 'Aula de Medicina Integral del Adolescente', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1676680009/medicina-integral-adolescente-min_tloixo.webp', 'https://drive.google.com/file/d/107FTVYToEvp6mISq7RfCkxfwCc-X_GO1/view?usp=sharing', 1, '2023-03-01', '2024-02-29', 2),
('Elaboración de proyectos de investigación social', 'Lic. Verónica Perea Rivera/ Lic. Martha Leticia Bureos Oaxaca', 300, 'Aula 4', NULL, NULL, 1, '2023-05-16', '2023-05-25', 4),
('Sesiones de capacitación técnica y actualización del laboratorio clínico', 'M. en C. Israel Parra Ortega', 0, 'Aula 7', NULL, NULL, 1, '2023-01-12', '2023-12-14', 0),
('Simposio: Procesos de calidad en la desinfeccción y estirilización de dispositivos médicos y quirúrg', NULL, 800, 'Auditorio Dr. Jesús Kumate', NULL, NULL, 3, '2023-03-08', '2023-03-10', 2),
('Trabajo Social con familias: Retos asociados a la intervención profesional en el contexto sanitario', 'Lic. Verónica Perea Rivera / Mtra. Virginia Emilia Fajardo Martínez', 300, 'Aula 6', NULL, NULL, 1, '2023-02-13', '2023-02-17', 1),
('Trastorno de estrés social y trastorno de estrés postraumático. Su impacto en la salud', 'Dra. Olena Pityk', 0, 'Auditorio Jesús Kumate', NULL, 'https://drive.google.com/file/d/13NDCfZqUcjotgfFomJKIQ9ITUmWYVf1B/view?usp=sharing', 1, '2023-02-02', '2023-02-02', 1),
('VI Jornadas de medicina nuclear pediátrica', 'Dr. Rafael Delgado Espín', 0, 'Aula Magna', NULL, NULL, 1, '2023-05-26', '2023-05-26', 4),
('VIII Curso teórico-práctico de bacteriología diagnóstica', NULL, 1500, 'Aula 8', NULL, NULL, 1, '2023-03-27', '2023-03-31', 2),
('XVI Curso de calidad y seguridad del paciente', 'Dra. Miriam Guadalupe Herrera Segura', 600, 'Auditorio Jesús Kumate', NULL, NULL, 3, '2023-05-22', '2023-05-26', 4),
('XXIX Curso Monográfico de Estomatología, conceptos actuales de cirugía maxilofacial, ortodoncia y es', NULL, 1000, 'Auditorio Dr. Jesús Kumate', NULL, NULL, 3, '2023-03-13', '2023-03-15', 2),
('XXVI Curso de actualización en anestesiología pediátrica y conmemorativo del LXXX aniversario del Ho', NULL, 1800, 'Auditorio Dr. Jesús Kumate y Edificio de Enseñanza (Aula Magna y Aula 1)', NULL, NULL, 3, '2023-04-17', '2023-04-21', 3),
('XXVIII Curso teórico-práctico de parasitología diagnóstica', 'M. en C. Israel Parra Ortega', 1500, 'Aula 1', NULL, 'https://drive.google.com/file/d/13NDCfZqUcjotgfFomJKIQ9ITUmWYVf1B/view', 1, '2023-02-13', '2023-02-17', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meses`
--

CREATE TABLE `meses` (
  `month_id` int(11) NOT NULL,
  `month_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `meses`
--

INSERT INTO `meses` (`month_id`, `month_name`) VALUES
(0, 'Enero'),
(1, 'Febrero'),
(2, 'Marzo'),
(3, 'Abril'),
(4, 'Mayo'),
(5, 'Junio'),
(6, 'Julio'),
(7, 'Agosto'),
(8, 'Septiembre'),
(9, 'Octubre'),
(10, 'Noviembre'),
(11, 'Diciembre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modalidad`
--

CREATE TABLE `modalidad` (
  `modality_id` int(11) NOT NULL,
  `modality_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modalidad`
--

INSERT INTO `modalidad` (`modality_id`, `modality_name`) VALUES
(1, 'Presencial'),
(2, 'En línea'),
(3, 'Híbrida');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`course_name`),
  ADD KEY `month_id` (`month_id`),
  ADD KEY `modality_id` (`modality_id`);

--
-- Indices de la tabla `meses`
--
ALTER TABLE `meses`
  ADD PRIMARY KEY (`month_id`);

--
-- Indices de la tabla `modalidad`
--
ALTER TABLE `modalidad`
  ADD PRIMARY KEY (`modality_id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `cursos_ibfk_1` FOREIGN KEY (`month_id`) REFERENCES `meses` (`month_id`),
  ADD CONSTRAINT `cursos_ibfk_2` FOREIGN KEY (`modality_id`) REFERENCES `modalidad` (`modality_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
