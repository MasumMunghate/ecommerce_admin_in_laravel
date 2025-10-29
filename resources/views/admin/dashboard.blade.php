

@extends('layouts.master')
@section('content')

<section class="section " id="section">
	<!-- ✅ Step 1: Wrap all cards in a Bootstrap row -->
	<div class="row g-3">
		<!-- ✅ Step 2: Each card goes inside a column -->
		<div class="col-md-4 col-lg-3">
			<div class="card h-100 equal-card">
				<div class="card-header pb-0">
					<h5 class="mb-3 card-title">Total Revenue</h5>
					<p class="mb-0 text-body">This Month</p>
					<h4 class="mb-0">$28,450</h4>
				</div>
			</div>
		</div>

		<div class="col-md-4 col-lg-3">
			<div class="card h-100 equal-card">
				<div class="card-header pb-0">
					<h5 class="mb-3 card-title">Today's Revenue</h5>
					<h4 class="mb-0">$28,450</h4>
				</div>
			</div>
		</div>

		<div class="col-md-4 col-lg-3">
			<div class="card h-100 equal-card">
				<div class="card-header pb-0">
					<h5 class="mb-3 card-title">Total Users</h5>
					<p class="mb-0 text-body">All Active Users</p>
					<h4 class="mb-0">28,450</h4>
				</div>
			</div>
		</div>

		<div class="col-md-4 col-lg-3">
			<div class="card h-100 equal-card">
				<div class="card-header pb-0">
					<h5 class="mb-3 card-title">Total Category</h5>
					<h4 class="mb-0">28,450</h4>
				</div>
			</div>
		</div>

		<div class="col-md-4 col-lg-3">
			<div class="card h-100 equal-card">
				<div class="card-header pb-0">
					<h5 class="mb-3 card-title">Total Product</h5>
					<h4 class="mb-0">28,450</h4>
				</div>
			</div>
		</div>
	</div>


	<!-- Graph related section  -->

	<div class="col-lg-12 col-md-12  mt-5 px-5 align-items-center " style="height:500px">
		<div class="card h-100">
			<div class="card-header pb-0 d-flex justify-content-between">
				<div class="card-title mb-0">
					<h5 class="mb-1">Earning Graph</h5>
					<p class="card-subtitle">Weekly Earnings Overview</p>
				</div>
				<div class="dropdown">
					<button class="btn btn-text-secondary rounded-pill text-muted border-0 p-2 me-n1 waves-effect waves-light" type="button" id="earningReportsId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<i class="ti ti-dots-vertical ti-md text-muted"></i>
					</button>
					<div class="dropdown-menu dropdown-menu-end" aria-labelledby="earningReportsId">
						<a class="dropdown-item waves-effect" href="javascript:void(0);">View More</a>
						<a class="dropdown-item waves-effect" href="javascript:void(0);">Delete</a>
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="row align-items-center g-md-8">
					<div class="col-12 col-md-5 d-flex flex-column">
						<div class="d-flex gap-2 align-items-center mb-3 flex-wrap">
							<h2 class="mb-0">$468</h2>
							<div class="badge rounded bg-label-success">+4.2%</div>
						</div>
						<small class="text-body">You informed of this week compared to last week</small>
					</div>
					<div class="resize-triggers"><div class="expand-trigger"><div style="width: 387px; height: 162px;"></div></div><div class="contract-trigger"></div></div></div>
				</div>
			</div>
		</div>
	</div>
</section>

@endsection