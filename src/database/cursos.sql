-- phpMyAdmin SQL Dump
-- version 5.1.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql-courses-database.alwaysdata.net
-- Generation Time: Mar 14, 2023 at 04:21 PM
-- Server version: 10.6.11-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `courses-database_cursos`
--

-- --------------------------------------------------------

--
-- Table structure for table `administradores`
--

CREATE TABLE `administradores` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `admin_user` varchar(255) NOT NULL,
  `admin_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `administradores`
--

INSERT INTO `administradores` (`admin_id`, `admin_name`, `admin_user`, `admin_password`) VALUES
(1, 'Cesar Castillo', 'cesarKastillo', 'Eureka21');

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

CREATE TABLE `cursos` (
  `course_name` varchar(255) NOT NULL,
  `course_instructor` varchar(255) DEFAULT NULL,
  `course_price` float DEFAULT NULL,
  `course_place` varchar(255) DEFAULT NULL,
  `course_image` varchar(255) DEFAULT NULL,
  `course_pdf` varchar(255) DEFAULT NULL,
  `modality_id` int(11) DEFAULT NULL,
  `course_start_date` date NOT NULL,
  `course_finish_date` date NOT NULL,
  `month_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `course_password` varchar(255) DEFAULT NULL,
  `course_vimeo_folder` int(11) DEFAULT NULL,
  `course_live_video` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`course_name`, `course_instructor`, `course_price`, `course_place`, `course_image`, `course_pdf`, `modality_id`, `course_start_date`, `course_finish_date`, `month_id`, `course_id`, `course_password`, `course_vimeo_folder`, `course_live_video`) VALUES
('5to Congreso de enfermería en alta especialidad de la CCINSHAE', 'E.E.I. Angélica María Hernández Tapia', 0, 'Hospital Infantil de México Federico Gómez', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677183043/Banner-5o-congreso-01_bligem_11zon_q1gbcd.jpg', 'https://drive.google.com/file/d/1-kP_rnGssAP3yUFdyl9Ik44_CTltaLBr/view?usp=sharing', 3, '2023-02-16', '2023-02-17', 1, 1, NULL, NULL, NULL),
('8º Curso para padres para el cuidado del niño con hemofilia', NULL, 500, 'Anexo A', NULL, NULL, 1, '2023-03-03', '2023-11-03', 2, 2, NULL, NULL, NULL),
('Atención psicológica en el paciente hospitalizado', NULL, 500, 'Aula 6', NULL, NULL, 1, '2023-04-17', '2023-04-21', 3, 3, NULL, NULL, NULL),
('Bioinformática, una herramienta indispensable en la investigación', '', 1500, 'Sala de videoconferencias, 6º piso del Edificio de Hemato-Oncología e Investigación', NULL, NULL, 1, '2023-04-24', '2023-04-28', 3, 4, NULL, NULL, NULL),
('Capacitación en micología clínica', 'M. en C.I. Jesús Reséndiz Sánchez/ I.B.T. Jorge Mauricio Díaz Barreto', 10000, 'Laboratorio', NULL, NULL, 1, '2023-03-01', '2023-04-28', 2, 5, NULL, NULL, NULL),
('Capacitación en micología clínica', NULL, 10000, 'Laboratorio', NULL, NULL, 1, '2023-05-02', '2023-06-30', 4, 6, NULL, NULL, NULL),
('Ciclo de conferencias: grupos vulnerables en la atención social', 'Lic. Verónica Perea Rivera / Mtra. Virginia Emilia Fajardo Martínez', 0, 'Anexo A', NULL, NULL, 1, '2023-01-12', '2023-10-12', 0, 7, NULL, NULL, NULL),
('Construcción del conocimiento para la investigación social', NULL, 300, 'Virtual', NULL, NULL, 2, '2023-04-10', '2023-04-14', 3, 8, NULL, NULL, NULL),
('Curso básico de metodología de la investigación ', NULL, 0, 'Plataforma Moodle', NULL, NULL, 2, '2023-03-01', '2023-05-01', 2, 9, NULL, NULL, NULL),
('Curso de bioseguridad hospitalaria', 'Dra. Marcela Salazar García', 0, 'Aulas 3 y 4, 6 piso del Edificio de Hemato-Oncología eInvestigación', NULL, NULL, 2, '2023-02-01', '2023-03-01', 1, 10, NULL, NULL, NULL),
('Curso de preparación para el examen de grado de la especialidad de enfermería', 'E.E.I. Maricela Cruz Jiménez', 800, 'Sala de videoconferencias, 6º piso del Edificio de Hemato-Oncología e Investigación', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677183183/examen-enfermeria-min_h8ysep_11zon_ffvde4.jpg', 'https://drive.google.com/file/d/1QbgilSpYdjxTnkOD0ZO9hWhmhcLEbc1F/view', 1, '2023-02-08', '2023-02-10', 1, 11, NULL, NULL, NULL),
('Curso de reentrenamiento en operación de acelerador lineal', NULL, 0, 'Aula de Radioterapia', NULL, NULL, 1, '2023-05-22', '2023-05-26', 4, 12, NULL, NULL, NULL),
('Curso de reentrenamiento en seguridad radiológica', NULL, 0, 'Aula de Radioterapia', NULL, NULL, 1, '2023-05-15', '2023-05-19', 4, 13, NULL, NULL, NULL),
('Curso monográfico: Certificación hospitalaria, estándares\r\nnecesarios para brindar servicios de calidad', 'Mtra. Olivia Aguilar Guzmán', 800, 'Auditorio Jesús Kumate', NULL, NULL, 3, '2023-01-16', '2023-01-20', 0, 14, NULL, NULL, NULL),
('Curso monográfico: Terapias de reemplazo renal continuas en el paciente pediátrico', NULL, 800, 'Auditorio Jesús Kumate', NULL, NULL, 3, '2023-05-17', '2023-05-19', 4, 15, NULL, NULL, NULL),
('Curso sobre temas de psicología infantil y la adolescencia', NULL, 500, 'En línea', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677183908/temas_de_psicolog%C3%ADa_infantil_1_mysepc.png', 'https://drive.google.com/file/d/1LBiFAoopQPCOnCNakM2i7q5E-trrcWDO/view?usp=sharing', 2, '2023-03-27', '2023-03-31', 2, 16, NULL, NULL, NULL),
('Diplomado de actualización de alta especialidad en Ortopedia Pediátrica', NULL, 1500, 'Aula 12', NULL, NULL, NULL, '2023-02-02', '2023-08-31', 1, 17, NULL, NULL, NULL),
('Diplomado de Encefalografía Clínica Pediátrica', NULL, 15000, 'Aula de Electroencefalografía Pediátrica', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677182795/Diplomado-de-encefalografi-a-cli-nica-01-min_cajwhh_11zon_ro3nlq.jpg', 'https://drive.google.com/file/d/1eEfEiV_QTs60h4-mXAusuhOn-ekg5UaW/view?usp=sharing', 1, '2023-03-01', '2023-08-31', 2, 18, NULL, NULL, NULL),
('Diplomado en Cirugía Colorrectal Pediátrica', NULL, 10000, 'Servicio de Cirugía General', NULL, NULL, 1, '2023-03-01', '2024-02-28', 2, 19, NULL, NULL, NULL),
('Diplomado en medicina transfusional y banco de sangre', NULL, 13500, 'Microsoft Teams', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677181712/banco-de-sangre-min_ozxy2z.webp', NULL, 3, '2023-01-26', '2023-10-27', 0, 20, NULL, NULL, NULL),
('Diplomado: Medicina integral del adolescente y Ginecología de niñas y adolescentes', NULL, 15000, 'Aula de Medicina Integral del Adolescente', 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677182588/medicina-integral-adolescente-min_tloixo_11zon_ziq7yv.jpg', 'https://drive.google.com/file/d/107FTVYToEvp6mISq7RfCkxfwCc-X_GO1/view?usp=sharing', 1, '2023-03-01', '2024-02-29', 2, 21, NULL, NULL, NULL),
('Elaboración de proyectos de investigación social', 'Lic. Verónica Perea Rivera/ Lic. Martha Leticia Bureos Oaxaca', 300, 'Aula 4', NULL, NULL, 1, '2023-05-16', '2023-05-25', 4, 22, NULL, NULL, NULL),
('Sesiones de capacitación técnica y actualización del laboratorio clínico', 'M. en C. Israel Parra Ortega', 0, 'Aula 7', NULL, NULL, 1, '2023-01-12', '2023-12-14', 0, 23, NULL, NULL, NULL),
('Simposio: Procesos de calidad en la desinfección y esterilización de dispositivos médicos y quirúrgicos para la seguridad del paciente', NULL, 800, 'Auditorio Dr. Jesús Kumate', NULL, NULL, 3, '2023-03-08', '2023-03-10', 2, 24, NULL, NULL, NULL),
('Trabajo Social con familias: Retos asociados a la intervención profesional en el contexto sanitario', 'Lic. Verónica Perea Rivera / Mtra. Virginia Emilia Fajardo Martínez', 300, 'Aula 6', NULL, NULL, 1, '2023-02-13', '2023-02-17', 1, 25, NULL, NULL, NULL),
('Trastorno de estrés social y trastorno de estrés postraumático. Su impacto en la salud', 'Dra. Olena Pityk', 0, 'Auditorio Jesús Kumate', NULL, 'https://drive.google.com/file/d/13NDCfZqUcjotgfFomJKIQ9ITUmWYVf1B/view?usp=sharing', 1, '2023-02-02', '2023-02-02', 1, 26, NULL, NULL, NULL),
('VI Jornadas de medicina nuclear pediátrica', 'Dr. Rafael Delgado Espín', 0, 'Aula Magna', NULL, NULL, 1, '2023-05-26', '2023-05-26', 4, 27, NULL, NULL, NULL),
('VIII Curso teórico-práctico de bacteriología diagnóstica', NULL, 1500, 'Aula 8', NULL, NULL, 1, '2023-03-27', '2023-03-31', 2, 28, NULL, NULL, NULL),
('XVI Curso de calidad y seguridad del paciente', 'Dra. Miriam Guadalupe Herrera Segura', 600, 'Auditorio Jesús Kumate', NULL, NULL, 3, '2023-05-22', '2023-05-26', 4, 29, NULL, NULL, NULL),
('XXIX Curso Monográfico de Estomatología, conceptos actuales de cirugía maxilofacial, ortodoncia y estomatología pediátrica', 'Dr. Vicente Cuairán Ruidíaz', 1000, 'Auditorio Dr. Jesús Kumate', NULL, NULL, 3, '2023-03-21', '2023-03-23', 2, 30, NULL, NULL, NULL),
('XXVI Curso de actualización en anestesiología pediátrica', NULL, 1800, 'Auditorio Dr. Jesús Kumate y Edificio de Enseñanza (Aula Magna y Aula 1)', NULL, NULL, 3, '2023-10-16', '2023-10-20', 9, 31, NULL, NULL, NULL),
('XXVIII Curso teórico-práctico de parasitología diagnóstica', 'M. en C. Israel Parra Ortega', 1500, 'Aula 1', NULL, 'https://drive.google.com/file/d/13NDCfZqUcjotgfFomJKIQ9ITUmWYVf1B/view', 1, '2023-02-13', '2023-02-17', 1, 32, NULL, NULL, NULL),
('Salud mental en las infancias', 'Dra. María Elena Medina Mora', NULL, NULL, NULL, NULL, NULL, '2023-03-02', '2023-03-02', 2, 33, NULL, NULL, NULL),
('Sesión general: Retinoblastoma, aportaciones del Hospital Infantil de México en América Latina en los últimos 25 años', 'Dr. Marco Antonio Ramírez ', NULL, NULL, 'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677184624/Formato_Retinoblastoma_20_an%C5%9Eos_INDD_2023-01_1_1_ug9itl.jpg', NULL, NULL, '2023-03-06', '2023-03-06', 2, 34, NULL, NULL, NULL),
('Salud renal para todos: ¡Preparándose para lo inesperado, apoyando a los vulnerables!', 'Dr. José Carlos Romo Vázquez', NULL, NULL, NULL, NULL, NULL, '2023-03-07', '2023-03-07', 2, 35, NULL, NULL, NULL),
('Sensibilización jurídica para el personal de salud', 'E.E.C.v. Heriberto Gómez Gaytán', NULL, NULL, NULL, NULL, NULL, '2023-03-10', '2023-03-10', 2, 36, NULL, NULL, NULL),
('Pase de visita magistral: como lo hacemos en HIM', 'Dra. Aída Mashenka Moreno González / Lucia Muñoz', NULL, NULL, NULL, NULL, NULL, '2023-03-10', '2023-04-28', 2, 37, NULL, NULL, NULL),
('Semana del cerebro / La investigación al alcance de los niños', 'Dr. Juan Carlos Corona Castillo', NULL, NULL, NULL, NULL, NULL, '2023-03-15', '2023-03-16', 2, 38, NULL, NULL, NULL),
('Seminario Historia y Filosofía de la Ciencia', 'Dr. Juan Garduño Espinosa', NULL, NULL, NULL, NULL, NULL, '2023-03-17', '2023-03-17', 2, 39, NULL, NULL, NULL),
('1er Simposio neurología / neurociencias', 'Dr. Jean Tron', NULL, NULL, NULL, NULL, NULL, '2023-03-23', '2023-03-23', 2, 40, NULL, NULL, NULL),
('Segundo diplomado de inmunología básica y clínica', 'M. en C.I. Jesús Resendiz Sánchez / I.B.T. Jorge Mauricio Díaz Barreto', NULL, NULL, NULL, NULL, NULL, '2023-04-04', '2023-10-31', 3, 41, NULL, NULL, NULL),
('Tendencias en neumología pediátrica', 'Dra. Jamaica Balderas', NULL, NULL, NULL, NULL, NULL, '2023-04-04', '2023-04-04', 3, 42, NULL, NULL, NULL),
('1er Simposio Nutrición y Obesidad', 'Dra. Jenny Vilchis Gil', NULL, NULL, NULL, NULL, NULL, '2023-04-13', '2023-04-13', 3, 43, NULL, NULL, NULL),
('Tips urológicos prácticos para el pediatra', 'Dr. Mario Díaz Pardo', NULL, NULL, NULL, NULL, NULL, '2023-04-13', '2023-04-14', 3, 44, NULL, NULL, NULL),
('Maratón Hemofilia: Pacientes y cuidado primario, cuidado para el paciente', 'Dra. Aída Mashenka Moreno González', NULL, NULL, NULL, NULL, NULL, '2023-04-14', '2023-04-14', 3, 45, NULL, NULL, NULL),
('1er Simposio de enfermedades infecciosas', 'Dr. Juan Xicohtencatl Cortes', NULL, NULL, NULL, NULL, NULL, '2023-04-18', '2023-04-18', 3, 46, NULL, NULL, NULL),
('Coloquio de urgencias , con la participación del Dr. James Callhagan', 'Dr. Víctor Olivar', NULL, NULL, NULL, NULL, NULL, '2023-04-24', '2023-04-24', 3, 47, NULL, NULL, NULL),
('Actualidades en cirugía pediátrica de alto nivel', 'Dr. Roberto Dávila Pérez', NULL, NULL, NULL, NULL, NULL, '2023-04-24', '2023-04-28', 3, 48, NULL, NULL, NULL),
('VIII Diplomado en línea: Dermatología pediátrica: Bases para el diagnóstico y tratamiento 2023', 'Dra. Adriana María Valencia Herrera', NULL, NULL, NULL, NULL, 2, '2023-05-01', '2024-04-30', 4, 49, NULL, NULL, NULL),
('1er Simposio de malformaciones congénitas', 'Dr. Javier Tadeo Granados ', NULL, NULL, NULL, NULL, NULL, '2023-05-09', '2023-05-09', 4, 50, NULL, NULL, NULL),
('2do Simposio de enfermería pediátrica', 'E.E.I. Angélica María Hernández Tapia', NULL, NULL, NULL, NULL, NULL, '2023-05-12', '2023-05-12', 4, 51, NULL, NULL, NULL),
('Seminario Historia y Filosofía de la Ciencia', 'Dr. Juan Garduño Espinosa', NULL, NULL, NULL, NULL, NULL, '2023-05-19', '2023-05-19', 4, 52, NULL, NULL, NULL),
('Simposio: Resistencia antimicrobiana', 'Dr. Juan Xicohtencatl Cortes', NULL, NULL, NULL, NULL, NULL, '2023-05-22', '2023-05-24', 4, 53, NULL, NULL, NULL),
('Seminario: Elaboración de Revisiones Sistemáticas COCHRANE', 'Dra. Leticia Barajas Nava', NULL, NULL, NULL, NULL, NULL, '2023-05-25', '2023-05-26', 4, 54, NULL, NULL, NULL),
('1er Simposio Oncología ', 'Dr. Rosendo Luria', NULL, NULL, NULL, NULL, NULL, '2023-05-25', '2023-05-25', 4, 55, NULL, NULL, NULL),
('Curso de enfermedades metabólicas, errores natos del metabolismo', 'Dra. Magdalena Cerón', NULL, NULL, NULL, NULL, NULL, '2023-05-30', '2023-05-31', 4, 56, NULL, NULL, NULL),
('Curso avanzado de metodología de la investigación', 'Dr. Horacio Márquez González', NULL, NULL, NULL, NULL, NULL, '2023-06-01', '2023-09-01', 5, 57, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `estudiantes`
--

CREATE TABLE `estudiantes` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `student_grade` varchar(255) NOT NULL,
  `student_institution` varchar(255) NOT NULL,
  `student_work_position` varchar(255) NOT NULL,
  `student_phone` int(11) NOT NULL,
  `student_email` varchar(255) DEFAULT NULL,
  `student_age` int(11) NOT NULL,
  `student_graduated` varchar(255) DEFAULT NULL,
  `student_course_graduated` varchar(255) DEFAULT NULL,
  `student_year_graduated` varchar(255) DEFAULT NULL,
  `student_nationality` varchar(255) NOT NULL,
  `student_specialty` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `estudiantes`
--

INSERT INTO `estudiantes` (`student_id`, `student_name`, `student_grade`, `student_institution`, `student_work_position`, `student_phone`, `student_email`, `student_age`, `student_graduated`, `student_course_graduated`, `student_year_graduated`, `student_nationality`, `student_specialty`) VALUES
(2, 'Ricardo José Guevara Guzmán', 'MÉDICO', 'HIMFG', 'Médico General', 123456, 'email@email.com', 45, NULL, NULL, NULL, 'Mexicana', NULL),
(3, 'Guevara Guzmán Ricardo José', 'EST. MED.', 'SSA', 'Médico general', 23456, 'ricardoce@email.com', 22, NULL, NULL, NULL, 'Mexicana', NULL),
(4, 'Nava Gómez Brayan Uriel', 'PSICÓLOGO', 'ISSTE', 'Psicólogo', 23455, 'brian@email.com', 25, NULL, NULL, NULL, 'Americana', NULL),
(5, 'Magos Salazar Carolina', 'TRABAJADOR SOCIAL', 'HIMFG', 'Trabajadora social', 2345, 'magos@magos.com', 23, NULL, NULL, NULL, 'Mexicana', NULL),
(6, 'Ricardo Guevara', 'MÉDICO', 'SSA', 'Médico', 123456, 'emil@email.com', 22, NULL, NULL, NULL, 'mexicana', NULL),
(7, 'Pedro Melendez', 'EST. ENF.', 'IMSS', 'Enfermero', 2345, 'peme@email.com', 45, NULL, NULL, NULL, 'Estadounidense', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `meses`
--

CREATE TABLE `meses` (
  `month_id` int(11) NOT NULL,
  `month_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meses`
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
-- Table structure for table `modalidad`
--

CREATE TABLE `modalidad` (
  `modality_id` int(11) NOT NULL,
  `modality_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modalidad`
--

INSERT INTO `modalidad` (`modality_id`, `modality_name`) VALUES
(1, 'Presencial'),
(2, 'En línea'),
(3, 'Híbrida');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `month_id` (`month_id`),
  ADD KEY `modality_id` (`modality_id`);

--
-- Indexes for table `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `meses`
--
ALTER TABLE `meses`
  ADD PRIMARY KEY (`month_id`);

--
-- Indexes for table `modalidad`
--
ALTER TABLE `modalidad`
  ADD PRIMARY KEY (`modality_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administradores`
--
ALTER TABLE `administradores`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cursos`
--
ALTER TABLE `cursos`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `estudiantes`
--
ALTER TABLE `estudiantes`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `cursos_ibfk_1` FOREIGN KEY (`month_id`) REFERENCES `meses` (`month_id`),
  ADD CONSTRAINT `cursos_ibfk_2` FOREIGN KEY (`modality_id`) REFERENCES `modalidad` (`modality_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
